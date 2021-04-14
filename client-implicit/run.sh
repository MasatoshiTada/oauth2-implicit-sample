docker run --rm -p 8080:80 \
    --mount type=bind,source=$(pwd)/static,destination=/usr/share/nginx/html \
    nginx:1.19
