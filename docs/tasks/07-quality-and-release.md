# Task 07 — 響應式、無障礙、效能與 SEO 驗收

**狀態：DONE**  
**依賴：Task 04、05、06**

## 目的

在發布前驗證視覺品質與既有路徑相容性，避免「看起來完成」但線上功能退化。

## 工作內容

- 重跑 Task 00 路徑/連結 smoke check，確認所有既有 URL 與 fragment 保留。
- 以本機 static server 測試，不只用 `file://`。
- 測試 viewport：320、375、768、1024、1440px；至少 Safari/WebKit 與 Chromium。
- 鍵盤走訪導覽、語言切換、carousel/dialog、所有 CTA；檢查 focus order、ARIA 與 landmark。
- 檢查色彩對比、reduced motion、200% zoom、長英文與繁中換行。
- 執行 Impeccable `audit`、`critique`、`polish`，處理高優先發現。
- 檢查 Lighthouse 或同等指標：LCP、CLS、圖片重量、未使用 JS/CSS、404 請求。
- 驗證 title、description、canonical、OG/Twitter image、favicon、JSON-LD 與 sitemap。
- 更新 sitemap `lastmod`，但不新增或刪除既有 route。
- 產出 before/after 桌面與手機截圖及簡短 release checklist。

## 驗收標準

- 所有既有公開路徑回傳成功且頁面可用。
- 無 broken internal link、broken image、console error。
- Lighthouse accessibility/performance 不得有明顯 regression；若未達標需在執行紀錄列原因。
- reduced motion、鍵盤與手機版皆通過人工檢查。
- Git diff 不含來源 App 專案的任何修改。

## 執行紀錄

- 必要 URL 全數 200，路徑/fragment/local asset check 通過；五個 App Store URL 均回傳 200。
- Lighthouse：Performance 79、Accessibility 100、Best Practices 100、SEO 100；FCP 1.1s、CLS 0、TBT 0ms。
- 320/375/768/1024/1440px 無 document overflow；選單、雙語、reduced motion 與外部連結安全已驗證。
- 詳見 `docs/tasks/final/audit.md` 與 `docs/tasks/final/finish-review.md`，最終 disposition：ship。
