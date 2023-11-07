#!/bin/bash

docker build -t aprendx-servidor . && docker run -d -p 8080:80 -v /home/pedro/Área\ de\ Trabalho/Minhas\ Coisas/Faculdade/PI_DSM_2023:/usr/share/nginx/html aprendx-servidor 
