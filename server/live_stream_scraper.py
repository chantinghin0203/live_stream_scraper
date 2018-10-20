from server.controller import api
from flask import Flask
from  server import application_config

app = Flask(__name__)
app.config.SWAGGER_UI_OAUTH_CLIENT_ID = 'u81ckbja13n241x9qlaa67obgfw1tk'
app.config.SWAGGER_UI_OAUTH_APP_NAME = 'twitch'
app.config.SWAGGER_UI_OAUTH_REALM = "TwitchTV"
api.authorizations = application_config.Prod.AUTHORIZATION
api.security = application_config.Prod.SCOPE
api.init_app(app)



#
# if __name__ == '__main__':
#     app.run()
