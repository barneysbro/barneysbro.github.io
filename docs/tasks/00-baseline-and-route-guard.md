# Task 00 — 基線、路徑與改版護欄

**狀態：DONE**  
**依賴：無**

## 目的

先記錄目前線上相容性與工作樹基線，避免改版破壞 App 內、搜尋引擎或外部已使用的網址。

## 工作內容

- 記錄 `git status`，區分既有未提交變更、Impeccable 安裝與後續改版。
- 建立公開路徑清單，至少包含：
  - `/`、`/index.html`
  - `/lost.html`、`/en/lost.html`
  - `/privacy.html`、`/terms.html`
  - `/app-ads.txt`、`/robots.txt`、`/sitemap.xml`
  - 首頁 `#home`、`#apps`、`#about`、`#contact`
  - `images/**` 既有素材路徑
- 盤點目前所有內部連結、App Store 連結、favicon、OG image 與 structured data 資源是否存在。
- 用最小腳本或 shell check 建立可重跑的路徑/連結 smoke check；不要導入測試框架。
- 記錄目前頁面桌面與手機版 baseline 截圖，供改版前後比較。

## 驗收標準

- 有一份可讀的路徑清單與可重跑的 smoke check。
- 明確標出目前失效或可疑連結，但本 task 不擅自改 URL。
- baseline 截圖涵蓋首頁、法律頁及中英文 lost 頁。
- 未覆蓋規劃前就存在的工作樹變更。

## 不做

- 不改視覺。
- 不重寫內容。
- 不新增網站 framework 或 build step。

## 執行紀錄

- 2026-08-04：完成公開路徑、fragment、內部連結、App Store URL、favicon、OG/JSON-LD 資源盤點。
- 新增可重跑檢查：`scripts/check-site.py`。
- 建立 `docs/tasks/baseline/README.md`、HTTP 狀態、browser failure log，以及 10 張 desktop/mobile baseline 截圖。
- 8 個必要檔案路徑及 4 個首頁 fragment 均存在；本機測試另確認 `/` 與所有必要 URL 回傳 200。
- 發現 2 個缺少的 HTML 資源、缺少 `/favicon.ico`、364 個由截圖探測造成的 404，以及 SGBUS/LONDONBUS App Store URL 不一致；留待 Tasks 01、03、04 修正。
