FROM node:lts-alpine
WORKDIR /app
COPY package.json . 
RUN npm install

COPY . /app/

EXPOSE 9999

CMD ('npm','start')