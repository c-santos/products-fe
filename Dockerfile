FROM node:20.14.0-alpine3.19

# Set as work directory inside of Docker container
WORKDIR /products-fe

# Copy package.json and tsconfig.json to work dir
COPY package*.json tsconfig*.json /products-fe/

RUN npm install

# Copy everything in the local directory to the container directory
COPY . /products-fe/
