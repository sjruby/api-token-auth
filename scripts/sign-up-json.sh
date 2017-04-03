#!/bin/bash

curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "sam@gmail.com",
      "password": "sam",
      "password_confirmation": "sam"
    }
  }'


# data output from curl doesn't have a trailing newline
echo
