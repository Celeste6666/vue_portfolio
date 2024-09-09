FROM node:14
RUN yarn global add @vue/cli

WORKDIR /usr/app/vue_portfolio

# # copy package.json and package-lock.json
COPY package.json ./

RUN npm install

# # copy all file to directory
COPY . .

# EXPOSE 8080

# ENV NODE_ENV=production

# RUN npm run build

# CMD ["npm", "run", "serve"]  