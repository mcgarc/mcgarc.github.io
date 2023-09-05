# mcgarc.github.io
Personal website with Github pages

## Testing -- MacOS

[Based on the instructions
here](https://snyk.io/blog/how-to-install-ruby-in-mac-os/)

Install ruby virtual envs (`brew install rbenv ruby-build`)

Initialise env (`rbenv init`)

If required, install Ruby (`rbenv install 3.1.2`)

At this stage, can check we are using the correct Ruby install with
`which`. We don't want the one in `/usr/bin`

Switch console Ruby version to that of the venv (`eval "$(rbenv init -)"`)

Install bundler (`gem install bundler`)

Install jekyll (`bundle install`, uses local Gemfile)

Run server `bundle exec jekyll serve` to host at `0.0.0.0:4000`

Note that for this to work, I added  webrick as a [workaround](https://github.com/jekyll/jekyll/issues/8523) (`bundle add webrick`)


## Testing -- Linux

Install gem (`sudo apt install rubygems`)

Install bundler (`gem install bundler`)

Install jekyll (`bundle install`, uses local Gemfile)

Run server `bundle exec jekyll serve` to host at `0.0.0.0:4000`
