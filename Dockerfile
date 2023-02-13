FROM node:16.14.0

WORKDIR /app

COPY package.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

ENV PORT=8080

ENV JWT_SECRET="thiswouldbeasecretandh264encryptionattheveryleastnormally"

ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/eShop?schema=public"

RUN npm run build

EXPOSE 8080

CMD ["bin/startup.sh"]
