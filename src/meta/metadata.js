// ==UserScript==
// @name         <%= meta.name %>
// @version      <%= version %>
// @namespace    <%= name %>
// @description  <%= description %>
// @license      <%= license %>; <%= meta.repo %>blob/<%= meta.mainBranch %>/LICENSE 
<%=
  meta.matches.map(function(match) {
    return '// @match        ' + match;
  }).join('\n')
%>
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @grant        GM_listValues
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @updateURL    <%= meta.downloads %><%= meta.files.metajs %>
// @downloadURL  <%= meta.downloads %><%= meta.files.userjs %>
// @icon         data:image/png;base64,<%= grunt.file.read('src/img/icon48.png', {encoding: 'base64'}) %>
// ==/UserScript==