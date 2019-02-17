FROM node:10.5


WORKDIR /app

COPY . .

EXPOSE 4200

RUN npm install -g @angular/cli@6.1.1 

RUN npm install

RUN ng serve