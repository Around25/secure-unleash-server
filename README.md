# Secure Unleash Server

A secure installation of the unleash server for feature flags management that allows you to
login with the chosen authentication mention on the API or client of the Unleash Server.

__Admin Auth Types:__
- Basic Auth
- Google OAuth2

__Client Auth Types:__
- Shared Secret

The docker image allows you to setup the following environment variables:
- `PORT` Port on which to start the server on. Defaults to 80 
- `AUTH_TYPE` Authentication type for the admin area. Defaults to "google"
- `SESSION_SECRET` Secret used to encrypt admin cookie. Defaults to "UNLEASH-SECRET"
- `DATABASE_URL` Database url. Defaults to: ""
- `GOOGLE_CLIENT_ID` Google OAuth2 client id ""
- `GOOGLE_CLIENT_SECRET` Google OAuth2 client secret ""
- `GOOGLE_CALLBACK_URL` Google OAuth2 callback url ""