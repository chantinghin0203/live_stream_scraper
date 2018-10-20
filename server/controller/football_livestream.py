from flask_restplus import Resource, Namespace

# api = Blueprint("Index", __name__, url_prefix="/football")
ns_football = Namespace("football")


@ns_football.route('/get_user_info')
class Football(Resource):
    def get(self):
        return "football works"
