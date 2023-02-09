FROM node:16.14.0

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

RUN npm install

RUN npx prisma generate

COPY . .

ENV PORT=8080

ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/eShop?schema=public"

EXPOSE 8080

CMD ["bin/startup.sh"]
