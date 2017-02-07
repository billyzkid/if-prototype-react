#!/bin/bash

if [ "$NODE_ENV" == "production" ]; then
  cd client
  npm install --only=dev
  npm install
  npm run build

  cd ../server
  npm install --only=dev
  npm install
  npm run build
fi