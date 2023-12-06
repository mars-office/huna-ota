#!/bin/sh
telepresence connect -n huna
telepresence intercept huna-huna-ota --port 3003:http --to-pod 8181 --env-file ./.env || true
