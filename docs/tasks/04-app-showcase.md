# Task 04 — 五個 App 產品展示

**狀態：DONE**  
**依賴：Task 01、03**

## 目的

把 HKBUS、台北倒垃圾、台北公車、SGBUS、LONDONBUS 從重複卡片改成可快速理解、各有辨識度的產品故事。

## 工作內容

- 使用 Task 01 content matrix 重寫 5 個 App 區塊。
- 每個 App 至少清楚呈現：地區/情境、核心價值、主要功能、代表截圖、正確 App Store CTA。
- 依內容需要使用交錯版面、sticky product story 或橫向 screenshot rail；不要為一致而犧牲可讀性。
- 截圖使用明確的靜態清單或 HTML，不再向不存在的多種副檔名發出大量請求。
- 圖片提供正確 `width`/`height`、`loading="lazy"`、描述性 alt；首屏關鍵圖例外。
- 若保留詳情 dialog，改用可存取的 `<dialog>` 或完整 focus management；若主頁已能說清楚則刪除 modal。
- 將產品資料集中在一個最簡單的來源，避免 HTML 與 JS 各維護一套互相矛盾的文案。

## 驗收標準

- 5 個 App 的功能與定位都能直接在主頁閱讀。
- 所有產品 CTA 指向正確 App Store 頁並使用安全的外部連結屬性。
- 不再產生目前每 App 探測 80 個不存在圖片 URL 的行為。
- 沒有未證實的 AI、下載數、評分、版本或功能宣稱。
- 手機可自然瀏覽截圖，鍵盤也能操作所有控制項。

## 執行紀錄

- 五個 App 均改為可直接閱讀的完整產品段落，使用已核實的中英文功能與正確 App Store URL。
- 移除 modal 與每次載入 400 個候選圖片請求的探測流程。
- 每個 App 使用 3 張明確 WebP 素材、描述性 alt、intrinsic dimensions 與行動版 snap rail。
