# -*- coding: utf-8 -*-
desc "Compress and print bookmarklets"
task "default" do
  Dir['*.js'].each do |filename|
    open(filename, "r") do |f|
      puts "---------- #{filename}"
      puts "javascript:" + f.read.gsub(/ *\n */s, '').gsub(' ', '%20')
    end
  end
end
