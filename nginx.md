"runjie-benkid-cn-80.conf" 
server {
    listen       80;
    server_name   runjie.benkid.cn;

    location / {
      root /data/www/project-runjie-prod;
      index index.html index.htm;
    }

    location /api {
      proxy_pass http://127.0.0.1:3009/api;
      proxy_set_header Host $host;
      proxy_set_header X-Nginx-proxy true;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_redirect off;
    }

}


------

upstream runjieapi {
    server 127.0.0.1:3009;
}

server {
    listen       80;
    server_name   runjieapi.benkid.cn;

    location / {
        proxy_pass http://runjieapi;
        proxy_set_header Host $host;
        proxy_set_header X-Nginx-proxy true;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_redirect off;
    }
}

"runjieapi-benkid-cn-3009.conf" 17L, 411C 
