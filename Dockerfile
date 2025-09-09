# Dockerfile

# Use an official Ruby image as the base
FROM ruby:3.1

# Install essential dependencies, now including Node.js and npm
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    npm

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Copy your Gemfile and install gems (caching layer)
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy your package.json and install npm dependencies (new caching layer)
COPY package.json ./
RUN npm install

# Copy the rest of your project files into the container
COPY . .

# Expose port 4000
EXPOSE 4000

# The command to run when the container starts
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]