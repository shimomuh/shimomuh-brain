# rails

```bash
$ echo '2.4.1' > .ruby-version
$ rbenv install 2.4.1 # if you cannot install ruby 2.4.1
$ gem install bundler # if you cannot install bundler
$ bundle init
$ echo "gem 'rails', '5.1.1'" >> Gemfile
$ bundle install --path vendor/bundle
$ bundle exec new . -d mysql -T
$ xcode-select --install # if you cannot install mysql2
$ echo 'vendor' >> .gitignore
$ echo 'tmp' >> .gitignore
```

After that, you start `bundle exec rails g controller xxx` etc...

# react

```bash
$ mkdir front
$ cd front
$ echo "v6.8.1" > .node-version
$ ndenv install v6.8.1 # if you cannot install node v6.8.1
$ brew install yarn # if you cannot install yarn
$ yarn add webpack --dev --exact
$ yarn add react react-dom -E
$ echo '{ "presets": ["es2015", "react"] }' > .babelrc
$ yarn add babel-cli babel-polyfill --dev -E
$ yarn add babel-loader babel-core --dev -E
$ yarn add babel-preset-es2015 babel-preset-react --dev -E
$ yarn add eslint --dev -E
$ yarn add babel-eslint --dev -E
$ yarn add eslint-plugin-react --dev -E
$ yarn add prop-types -E
$ yarn add redux react-redux -E
$ echo 'node_modules' > .eslintignore
$ yarn install
```
