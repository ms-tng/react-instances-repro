#!/usr/bin/env bash

rm -rf app/node_modules lib/node_modules lib/dist
yarn --cwd lib install
yarn --cwd lib build
yarn --cwd app install
yarn --cwd app start