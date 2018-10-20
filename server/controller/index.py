from flask_restplus import Resource, Namespace

# api = Blueprint("Index", __name__, url_prefix="/football")
ns_index = Namespace("/")


@ns_index.route('/')
class Index(Resource):
    def get(self):
        return "football works"

