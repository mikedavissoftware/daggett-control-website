#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile # These lines would be commented out if we had an API only app
bundle exec rake assets:clean
rm -rf public
npm install --prefix client && npm run build --prefix client
bundle exec rake db:migrate
bundle exec rake db:seed
cp -a client/dist/. public/
