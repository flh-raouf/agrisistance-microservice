# Stage 1: Build
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Stage 2: Run
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app /app
CMD ["npm", "run", "start:dev", "agrisistance-user-service"]
