from server.controller import ns_football,ns_index
from flask import Flask



app = Flask(__name__)
app.register_blueprint(ns_index)
app.register_blueprint(ns_football)




#
# if __name__ == '__main__':
#     app.run()
