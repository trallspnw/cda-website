#!/usr/bin/env bash

# Install jekyll
apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler

# Build Prod
git fetch
git checkout prod
JEKYLL_ENV=production jekyll build

# Build Test
git checkout dev
sed -i -z 's/baseurl: \n/baseurl: \/website-admin\/test\n/g' _config.yml
echo \nConfig for test environment:\n
cat _config.yml
JEKYLL_ENV=development jekyll build --destination ./_site/website-admin/test
rm -rf ./_site/website-admin/test/website-admin*
