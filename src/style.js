<%= grunt.file.read('src/css/Original.css') %>
<%= grunt.file.read('src/css/Fonts.css') %>
<%= grunt.file.read('src/css/Cleanup.css') %>
" + ($SS.conf["Sidebar Position"] !== 3 ? "<%= grunt.file.read('src/css/Sidebar.css') %>" : "") + "
<%= grunt.file.read('src/css/Colors.css') %>
<%= grunt.file.read('src/css/General.css') %>
<%= grunt.file.read('src/css/Icons.css') %>
<%= grunt.file.read('src/css/Highlight.css') %>
<%= grunt.file.read('src/css/ThreadWatcher.css') %>
<%= grunt.file.read('src/css/Options.css') %>
" + ($SS.conf["Version Fix"] !== 1 ? "<%= grunt.file.read('src/forks/MayhemYDG/General.css') %>" : "") + "
" + $SS.theme.customCSS + "