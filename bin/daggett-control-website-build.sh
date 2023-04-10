#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake assets:precompile # These lines would be commented out if we had an API only app
bundle exec rake assets:clean
bundle exec rake db:migrate
# bundle exec rake db:seed