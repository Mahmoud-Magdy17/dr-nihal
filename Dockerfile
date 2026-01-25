# Build stage - not needed since we already have 'out' folder
# This Dockerfile just serves the pre-built static files

FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the static build output
COPY out/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
