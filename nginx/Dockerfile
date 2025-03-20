# Use an official Nginx runtime as a parent image
FROM nginx:alpine
# Copy the ngnix.conf to the container
COPY project/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 for Nginx
EXPOSE 80
# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
