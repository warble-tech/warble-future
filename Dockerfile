FROM node:22-alpine
WORKDIR /app
COPY public ./public
COPY src ./src
COPY server.mjs ./server.mjs
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "server.mjs"]
