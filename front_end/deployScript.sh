#!/bin/bash

# Navigate to the directory where your React build files are located
cd /var/www/html

# Remove the old application directory
rm -rf my-react-app

# Create a new directory for the new build
mkdir my-react-app

# Go back to the previous directory
cd -

# Copy the new build files to the new directory
cp -r build/* /var/www/html/my-react-app/

# Restart the Nginx service to apply any configuration changes
systemctl restart nginx

# Restart the PM2-managed backend application
pm2 restart khorouga-backend-api

# Output a success message
echo "Deployment and application restart successful"
