FROM oven/bun:latest

# 必要なツールのインストール
RUN apt-get update && apt-get install -y git

# node ユーザーの作成
RUN useradd -ms /bin/bash node

# 作業ディレクトリの設定
WORKDIR /app

# Bun のグローバルパッケージのインストール（必要に応じて）
# RUN bun add -g <package-name>

# デフォルトのシェルを設定
ENV SHELL /bin/bash

# 環境変数の設定
ENV PORT=8080

# ユーザーを node に切り替え
USER node

# 注意: COPY と RUN コマンドはdevcontainer.jsonのpostCreateCommandで行うため、ここでは省略します