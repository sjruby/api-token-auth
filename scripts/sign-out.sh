#!/bin/bash




#ID=6 TOKEN=BAhJIiU0NTI0MDZiNjViOTg1N2Y5N2VmNTg1NDJiY2NjNmE3OAY6BkVG--65dd00e4ea71c1e1418ad6c31a008a6d68d71bd3 scripts/sign-out.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
