import os

from server.live_stream_scraper import app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    # app.run(host='0.0.0.0', port=port)
    app.run(host='192.168.2.9', port=port)