# Use an official Node runtime as a base image
FROM node:18
# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the entire project to the container
COPY . .

# Build the React app

# Expose the port that the app will run on
EXPOSE 3000
