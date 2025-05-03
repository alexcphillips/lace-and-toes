FROM node:alpine

USER root

EXPOSE 3000

WORKDIR /app

RUN echo "Copying files..."
COPY ./server .
COPY package.json .
COPY package-lock.json .
COPY server/.env .

RUN echo "Installing packages..."
RUN npm install

RUN echo "Starting nodejs..."
CMD [ "npm", "run", "server" ]
