#!/bin/bash

npm run build
if [ $? -eq 0 ]
then
  echo "SUCCESS"
else
  echo "FAIL"
fi