#!/bin/bash

echo creating tar...
tar  --exclude='./scripts' --exclude='./node_modules' --exclude='./.git' --exclude='./.eslintrc.json' -czvf ./aaaie-eslintrc.tar .
echo tar created