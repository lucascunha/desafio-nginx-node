FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/laravel/public -p && touch /var/www/laravel/public

RUN mkdir /var/www/html -p && touch /var/www/html/index.php