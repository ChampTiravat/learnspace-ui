FROM node:8.10.0

WORKDIR /learnspace-ui
COPY ./package.json /learnspace-ui
RUN yarn
COPY . /learnspace-ui
EXPOSE 3000
CMD ["yarn", "run", "production"]
