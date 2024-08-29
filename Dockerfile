FROM oven/bun:latest

WORKDIR /app

COPY package.json .

RUN bun install --production

COPY src src
COPY tsconfig.json .

ENV PORT=8080

CMD ["bun", "run", "src/index.ts"]