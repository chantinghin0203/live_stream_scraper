from flask import Blueprint

api = Blueprint("Index", __name__, url_prefix="/football")


@api.route("/", methods=["GET"])
def index():
    return "football works"
