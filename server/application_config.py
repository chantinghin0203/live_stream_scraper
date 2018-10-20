class Prod:
    AUTHORIZATION = {
        'oauth2': {
            'type': 'oauth2',
            'flow': 'implicit',
            'tokenUrl': "https://id.twitch.tv/oauth2/token",
            'redirectUrl': "http://localhost:5000/swaggerui/bower/swagger-ui/dist/o2c.html",
            "authorizationUrl": "https://api.twitch.tv/kraken/oauth2/authorize",
            'scopes': {
                "viewing_activity_read": 'Grant read-only access',
                "user:read:email": 'Grant read-only access',
                "user:edit:broadcast": 'Grant read-only access'
            }
        },
    }

    SCOPE = {'oauth2': ["viewing_activity_read", "user:read:email", "user:edit:broadcast"]}
