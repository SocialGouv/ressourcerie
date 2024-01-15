ARG NODE_VERSION=lts-alpine3.18@sha256:c8245ebe9d86862ab40bbaee04f69f9787c57b83beb6e9a174e8afc154989e1f
FROM node:$NODE_VERSION AS base
WORKDIR /app
ENV NODE_ENV production
USER 1000

FROM base AS builder
WORKDIR /app

COPY yarn.lock .yarnrc.yml ./
COPY --chown=1000:1000 .yarn .yarn
RUN yarn fetch --immutable

COPY --chown=1000:1000 . .
RUN yarn build

RUN yarn workspaces focus --production && yarn cache clean


FROM base AS server

# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
