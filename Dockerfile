# Base image for building the Astro.js project
FROM node:20.2.0-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the Astro.js project
RUN npm run build

# Nginx base image for serving the Astro.js application
FROM nginx:alpine

# Copy the built Astro.js files to the Nginx default public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

