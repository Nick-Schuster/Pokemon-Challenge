FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY public/ ./
COPY src/ ./
COPY tsconfig.json ./
COPY jest-setup.js ./
COPY jest.config.js ./
COPY .babelrc ./



EXPOSE 3000
CMD ["npm", "start"]
