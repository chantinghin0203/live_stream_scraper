import praw
from bs4 import BeautifulSoup
from flask_restplus import Resource, Namespace

ns_nba = Namespace("nba")


@ns_nba.route('/get-stream-list-praw')
class NbaPraw(Resource):
    reddit = praw.Reddit(client_id='CpHzcp8gb5w6Uw',
                         client_secret='jh5baagLN1j0kdFaMACIhYDGFC4',
                         user_agent='stream-scraper')

    def get(self):
        stream_list = {}
        for submission in NbaPraw.reddit.subreddit('nbastreams').hot(limit=20):
            if "GAME THREAD" in submission.title.upper():
                stream_list[submission.title] = []
                for comments in submission.comments.list():
                    link_dict = self.extract_links_and_info(comments)
                    if link_dict:
                        stream_list[submission.title].append([link_dict])
                        # print(stream_list)

        return stream_list

    def extract_links_and_info(self, comments) -> {}:
        soup = BeautifulSoup(comments.body_html, "html.parser")
        stream_description = soup.find("p")
        if stream_description:
            stream_link = soup.find("a")
            if stream_link:
                link_dict = {"link": stream_link.get_attribute_list("href")[0],
                             "description": stream_description.text}
                return link_dict
        return None
