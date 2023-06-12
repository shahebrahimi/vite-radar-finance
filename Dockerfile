FROM bitnami/node:18 AS build
WORKDIR /app

ARG SITEMAP_HOST

RUN corepack enable

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY .npmrc ./
RUN CYPRESS_INSTALL_BINARY=0 pnpm install

COPY . .
RUN SITEMAP_HOST=$SITEMAP_HOST \
  pnpm ssg:build

FROM bitnami/node:18 AS prod
WORKDIR /app

RUN corepack enable

COPY --from=build /app/dist dist
COPY --from=build /app/node_modules node_modules
COPY --from=build /app/package.json .

EXPOSE 3000

CMD ["pnpm", "ssg:serve"]