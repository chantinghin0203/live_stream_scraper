import time
from urllib.request import urlopen

import praw
from praw.models.reddit import comment
from bs4 import BeautifulSoup
from flask_restplus import Resource, Namespace

ns_football = Namespace("football")


@ns_football.route('/get-stream-list')
class Football(Resource):
    URL = 'https://www.reddit.com/r/soccerstreams/'
    REDDIT_URL = 'https://www.reddit.com'

    def get(self):
        stream_links = []
        soup = self.get_data_from_reddit()

        list_title = soup.find_all("a", class_="SQnoC3ObvgnGjWt90zD9Z")
        for title in list_title:
            title_text = title.find("h2").text
            if "vs" in title_text:
                stream_links.append(f"{title_text} : {Football.REDDIT_URL}{title.get_attribute_list('href')[0]}")

        return stream_links

    def get_data_from_reddit(self):
        soup = None
        for i in range(20):
            try:
                soup = BeautifulSoup(urlopen(Football.URL), "html.parser")
                break
            except Exception as e:
                print(e)
                time.sleep(1)
        return soup


@ns_football.route('/get-stream-list-praw')
class FootballPraw(Resource):
    reddit = praw.Reddit(client_id='CpHzcp8gb5w6Uw',
                         client_secret='jh5baagLN1j0kdFaMACIhYDGFC4',
                         user_agent='stream-scraper')

    def get(self):
        result_list = []
        for submission in FootballPraw.reddit.subreddit('soccerstreams').hot(limit=20):
            if "VS" in submission.title.upper():
                stream_list = {}
                stream_list["title"] = submission.title
                stream_list["links"] = []
                for comments in submission.comments.list():
                    link_dict = self.extract_links_and_info(comments)
                    if link_dict:
                        stream_list["links"].append(link_dict)
                        # print(stream_list)
                result_list.append(stream_list)
        return result_list

    def extract_links_and_info(self, comments) -> {}:
        if isinstance(comments, comment.Comment):
            soup = BeautifulSoup(comments.body_html, "html.parser")
            stream_description = soup.find("p")
            if stream_description:
                stream_link = soup.find("a")
                if stream_link:
                    link_dict = {"link": stream_link.get_attribute_list("href")[0],
                                 "description": stream_description.text}
                    return link_dict
        return None
