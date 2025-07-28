#!/bin/sh
set -e
if [ ! -d node_modules ]; then
  echo "[install.sh] Installing dependencies..."
  npm install
else
  echo "[install.sh] Dependencies already installed."
fi
