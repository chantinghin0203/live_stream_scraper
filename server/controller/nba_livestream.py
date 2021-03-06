import praw
from bs4 import BeautifulSoup
from flask_restplus import Resource, Namespace
from praw.models.reddit import comment

ns_nba = Namespace("nba")


@ns_nba.route('/get-stream-list-praw')
class NbaPraw(Resource):
    reddit = praw.Reddit(client_id='CpHzcp8gb5w6Uw',
                         client_secret='jh5baagLN1j0kdFaMACIhYDGFC4',
                         user_agent='stream-scraper')

    def get(self):
        result_list = []
        for submission in NbaPraw.reddit.subreddit('nbastreams').hot(limit=20):
            if "GAME THREAD" in submission.title.upper():
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
