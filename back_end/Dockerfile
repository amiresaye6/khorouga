FROM node:20.16-alpine3.19

WORKDIR /build

COPY package*.json .

RUN npm ci --omit=dev && npm cache clean --force

COPY . .

EXPOSE 1234

CMD ["node", "src/server.js"]
