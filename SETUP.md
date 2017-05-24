```bash
$ echo '2.4.1' > .ruby-version
$ bundle init
$ echo "gem 'rails', '5.1.1'" >> Gemfile
$ bundle install --path vendor/bundle
$ bundle exec new . -d mysql -T
$ xcode-select --install # if you cannot install mysql2
$ echo 'vendor' >> .gitignore
$ echo 'tmp' >> .gitignore
```
