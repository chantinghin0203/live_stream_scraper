from urllib.request import urlopen
import time
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
        for i in range(20):
            try:
                soup = BeautifulSoup(urlopen(Football.URL), "html.parser")
                break
            except Exception as e:
                print(e)
                time.sleep(1)
        return soup
