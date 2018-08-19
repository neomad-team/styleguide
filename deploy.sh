#! /bin/sh

echo "build files"
npm run dev
npm run build

echo "Send built files in dist branch"
git checkout dist
git pull origin master

echo "Done"
