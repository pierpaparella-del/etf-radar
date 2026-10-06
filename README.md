# ETF Radar

Watchlist ETF con **score tecnico v4** e dati Yahoo Finance (ritardati).

**Repo:** https://github.com/pierpaparella-del/etf-radar

## Deploy completo (GitHub Pages)

1. Scarica il file unico **ETF-Radar.html** (da Grok).
2. Su questo repo: **Add file → Upload files**.
3. Caricalo come **`index.html`** (sostituisci quello presente).
4. **Settings → Pages → Deploy from branch → `main` / `/ (root)` → Save**.
5. Dopo 1–2 minuti apri:

   **https://pierpaparella-del.github.io/etf-radar/**

## Uso locale

```bash
python3 -m http.server 8080
```

Apri `http://localhost:8080/ETF-Radar.html`

**Non usare `file://`** — CORS blocca le richieste a Yahoo.

## Disclaimer

Strumento informativo. Non costituisce consulenza finanziaria.
