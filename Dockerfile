FROM node:10-alpine
COPY package.json ./

RUN npm install --env=production

COPY . .

ENV PORT 80
ENV AUTH_TYPE "google"
ENV SESSION_SECRET "UNLEASH-SECRET"
ENV DATABASE_URL ""

# Google OAuth Login configuration
ENV GOOGLE_CLIENT_ID ""
ENV GOOGLE_CLIENT_SECRET ""
ENV GOOGLE_CALLBACK_URL ""

EXPOSE 80

CMD node index.js