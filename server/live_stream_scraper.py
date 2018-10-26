from server.controller import api
from flask import Flask
from server import application_config
from server.controller.FrontEndController import blueprint_ui

app = Flask(__name__)
app.register_blueprint(blueprint_ui)
app.config.SWAGGER_UI_OAUTH_CLIENT_ID = 'CpHzcp8gb5w6Uw'
app.config.SWAGGER_UI_OAUTH_APP_NAME = 'reddit'
app.config.SWAGGER_UI_OAUTH_REALM = "Reddit"
api.authorizations = application_config.Prod.AUTHORIZATION
api.security = application_config.Prod.SCOPE
api.init_app(app)



#
# if __name__ == '__main__':
#     app.run()
