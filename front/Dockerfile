# Use an official Node runtime as a parent image
FROM node:20 AS build
# Set the working directory to /app
WORKDIR /app
# Copy the package.json and package-lock.json to the container
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code to the container
COPY . .
# Build the React app
CMD ["tail", "-f", "/dev/null"]
