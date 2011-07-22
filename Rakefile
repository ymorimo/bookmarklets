# -*- coding: utf-8 -*-
desc "Compress and print bookmarklets"
task "default" do
  Dir['*.js'].each do |filename|
    open(filename, "r") do |f|
      puts "---------- #{filename}"
      let = f.read.lines.reject { |line| %r{^\s*//} =~ line }.map { |line| line.strip }.join
      let.gsub!(' ', '%20')
      puts "javascript:#{let}"
    end
  end
end
