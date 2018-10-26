from flask import Flask, render_template, Blueprint

blueprint_ui = Blueprint("ui", __name__,url_prefix="/ui")


@blueprint_ui.route("/")
def ui():
    return render_template("index.html")
