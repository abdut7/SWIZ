server {
    listen 80;
    listen[::]: 80;

    index index.html;
    server_name swissbayedutech.live www.swissbayedutech.live;

    location / {
        proxy_pass http: //localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

    }
}

server {

    listen 80;
    listen[::]: 80;


    index index.html;

    server_name admin.swissbayedutech.live www.admin.swissbayedutech.live;

    location / {
        proxy_pass http://localhost:4001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
server {

    listen 80;

    listen[::]: 80;


    index index.html;


    server_name swissbayedutech.com www.swissbayedutech.com;
    location / {

        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


server {

    listen 80;

    listen[::]: 80;

    index index.html;


    server_name common.swissbayedutech.com www.common.swissbayedutech.com;
    location / {

        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


server {

    listen 80;

    listen[::]: 80;

    index index.html;


    server_name vedio.swissbayedutech.com www.vedio.swissbayedutech.com;
    location / {

        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}


server {

    listen 80;

    listen[::]: 80;


    index index.html;


    server_name trade.swissbayedutech.com www.trade.swissbayedutech.com;
    location / {

        proxy_pass http: //localhost:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

sudo certbot --nginx -d swissbayedutech.live -d www.swissbayedutech.live -d admin.swissbayedutech.live -d www.admin.swissbayedutech.live  -d swissbayedutech.com -d www.swissbayedutech.com -d common.swissbayedutech.com -d www.common.swissbayedutech.com -d vedio.swissbayedutech.com -d www.vedio.swissbayedutech.com -d trade.swissbayedutech.com -d www.trade.swissbayedutech.com

sudo certbot --nginx  -d www.admin.swissbayedutech.live   -d www.common.swissbayedutech.com  -d www.vedio.swissbayedutech.com -d www.trade.swissbayedutech.com
