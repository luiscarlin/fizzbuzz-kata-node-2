guard :shell do
  watch(%r{spec/javascripts/.+_spec\.(js\.coffee|js|coffee)$}) { |m| `./node_modules/.bin/jasmine-node spec` }
  watch(%r{app/assets/javascripts/(.+?)\.(js\.coffee|js|coffee)(?:\.\w+)*$}) { |m| `./node_modules/.bin/jasmine-node spec` }
end
