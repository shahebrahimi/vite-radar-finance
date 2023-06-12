#!/bin/bash

# required: https://virtubox.github.io/img-optimize/
img-optimize --jpg --png ./public

find ./public -name "*.svg" -type f -exec npx svgo --precision=3 --final-newline {} +
