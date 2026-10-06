(function(){
  var st = document.getElementById("status");
  if (!st) return;
  st.className = "";
  st.innerHTML =
    '<div class="beta"><b>Repo GitHub pronto.</b> Per l\'app completa carica il file unico:</div>' +
    '<ol style="font-size:14px;padding-left:20px">' +
    '<li>Scarica <code>ETF-Radar.html</code> da Grok (file completo un solo file)</li>' +
    '<li>Su GitHub: Add file → Upload files → carica come <code>index.html</code> (sovrascrivi)</li>' +
    '<li>Settings → Pages → Branch: <b>main</b> / root → Save</li>' +
    '<li>Apri <a href="https://pierpaparella-del.github.io/etf-radar/" target="_blank">pierpaparella-del.github.io/etf-radar</a></li>' +
    '</ol>' +
    '<p class="meta">Locale: <code>python3 -m http.server 8080</code> nella cartella del file HTML.</p>';
})();
