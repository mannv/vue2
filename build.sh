docker build . -t vue-app
docker rm -f cross_lang
docker run --name=cross_lang -d -p 80:80 vue-app