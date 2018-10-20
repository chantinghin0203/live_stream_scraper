from server.controller.football_livestream import ns_football
from server.controller.index import ns_index
from flask_restplus import Api

api = Api(
    title='Live Stream scraper',
    version='1.0',
    description='Happy scraping',
)

api.add_namespace(ns_football)
api.add_namespace(ns_index)

