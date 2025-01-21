# Stage 1: Build stage
FROM node:20-slim AS builder

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Production stage
FROM node:20-slim

# Install necessary debugging tools 
RUN apt-get update \
  && apt-get install --no-install-recommends -y \
  make \
  curl \
  iputils-ping \
  && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy built application from the builder stage
COPY --from=builder /app ./

# Expose the default Next.js port
EXPOSE 3000

# Start the production server
CMD ["yarn", "start"]
