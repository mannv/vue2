# Deploy with docker (nginx)

References: https://cli.vuejs.org/guide/deployment.html#docker-nginx

1. Build your docker image
```
docker build . -t vue-app
```

2. Remove docker container if exists
```
docker rm -f cross_lang
```

3. Run your docker image
```
docker run --name=cross_lang -d -p 80:80 vue-app
```

**Or simply execute a single command**
```
sh build.sh
```