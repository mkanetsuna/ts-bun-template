FROM oven/bun:latest

# 必要なツールのインストール
RUN apt-get update && apt-get install -y git

# 作業ディレクトリの設定
WORKDIR /app

# Bun のグローバルパッケージのインストール（必要に応じて）
# RUN bun add -g <package-name>

# デフォルトのシェルを設定
ENV SHELL /bin/bash

# 環境変数の設定
ENV PORT=8080