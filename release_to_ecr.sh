aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 737121090918.dkr.ecr.us-east-1.amazonaws.com
ENV=test
docker build -t cac-game-api .

docker tag cac-game-api:latest 737121090918.dkr.ecr.us-east-1.amazonaws.com/cac-game-api:${ENV}

docker push 737121090918.dkr.ecr.us-east-1.amazonaws.com/cac-game-api:${ENV}