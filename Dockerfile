FROM node:lts as dependencies
WORKDIR /my-project
COPY package.json ./
RUN yarn install --frozen-lockfile --ignore-scripts 

FROM node:lts as builder
WORKDIR /my-project
COPY . .
COPY --from=dependencies /my-project/node_modules ./node_modules
RUN yarn build

FROM node:lts-alpine3.18@sha256:c8245ebe9d86862ab40bbaee04f69f9787c57b83beb6e9a174e8afc154989e1f as runner
WORKDIR /my-project
ENV NODE_ENV production
USER 1001

# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /my-project/next.config.js ./
COPY --from=builder /my-project/public ./public
COPY --from=builder /my-project/.next ./.next
COPY --from=builder /my-project/node_modules ./node_modules
COPY --from=builder /my-project/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
