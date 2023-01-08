FROM node:16-alpine

WORKDIR /usr/source/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8080-8089 449

CMD [ "node", "pogymain.js" ]
