FROM mcr.microsoft.com/playwright:v1.41.1-jammy

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npx", "playwright", "test", "tests/Automation_Store.spec.js"]
