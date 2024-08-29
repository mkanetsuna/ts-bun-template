FROM oven/bun:latest

WORKDIR /app

COPY package.json .

RUN bun install --production

COPY src src
COPY tsconfig.json .

CMD ["bun", "run", "src/index.ts"]