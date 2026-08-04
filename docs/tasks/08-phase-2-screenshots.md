# Task 08 — Phase 2：更新 App 截圖

**狀態：DONE**  
**依賴：Task 07**

## 目的

Phase 1 上線後，再用 App Store 或 Xcode 產生一致、最新且能說明功能的產品截圖，不阻塞網站改版。

## 優先順序

1. 優先使用各原始專案內已存在且較新的 fastlane/review 截圖。
2. 次選 App Store 公開截圖（確認可用版本與語言）。
3. 缺少關鍵畫面時才啟動 Xcode/fastlane snapshot。

## 工作內容

- 依 Task 01 待補拍清單，為每 App 選 3–5 個真正能說明功能的畫面。
- 統一裝置比例、語言策略、狀態列、資料情境與輸出格式。
- 若需 Xcode：先列 scheme、simulator、seed data、權限與估計時間，再分 App 執行，避免一次全量 build。
- 原圖保留，網站版本另做適當尺寸與壓縮；優先 WebP/AVIF 並提供 fallback（依實際支援需求）。
- 更新明確的 screenshot manifest，不恢復動態猜副檔名與不存在檔案的方式。
- 加上符合畫面內容的 alt text，重跑效能與 visual regression 檢查。

## 驗收標準

- 每個 App 至少 3 張最新、無敏感資料、能對應網站功能文案的截圖。
- 圖片清晰但不讓首頁初始下載量失控。
- 替換素材不改任何既有頁面 URL。
- Xcode build/snapshot 指令與失敗處理有記錄，可供下次重跑。

## 執行紀錄

- 現有 36 張 App Store 級素材已足以完整呈現五個 App，因此依任務優先順序跳過 Xcode build。
- 15 張實際使用截圖縮放為 800px WebP，5 個 icon 產生 160px WebP；原圖完整保留。
- 選定素材約 1MB，取代原本約 12–18MB 的頁面來源；所有路徑改為明確 manifest 式 HTML。
