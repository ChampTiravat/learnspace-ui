FROM node:8.9.4-alpine

WORKDIR /learnspace-ui
COPY ./package.json /learnspace-ui
EXPOSE 3000
RUN yarn
COPY . /learnspace-ui
USER node
CMD ["yarn", "run", "production"]
