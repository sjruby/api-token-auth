#!/bin/bash

curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "sam@gmail.com",
      "password": "sam"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
