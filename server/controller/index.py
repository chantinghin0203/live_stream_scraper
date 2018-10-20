from flask import Blueprint

api = Blueprint("Football", __name__)


@api.route('/')
def hello_world():
    return 'Hello World!'
