#!/bin/bash

docker build -t aprendx-servidor . && docker run -d -p 8080:80 -v "$(pwd)/..":/usr/share/nginx/html aprendx-servidor 
