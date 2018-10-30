from server.controller.football_livestream import ns_football
from server.controller.nba_livestream import ns_nba
from flask_restplus import Api

api = Api(
    title='Live Stream scraper',
    version='1.0',
    description='Happy scraping',
    doc='/document'
)

api.add_namespace(ns_football)
api.add_namespace(ns_nba)
