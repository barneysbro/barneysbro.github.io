# Task 03 — 首頁視覺基礎與 Hero

**狀態：DONE**  
**依賴：Task 02**

## 目的

先完成整站的視覺語言、導覽與首屏，建立後續 App 區塊可沿用的基礎。

## 工作內容

- 依 `DESIGN.md` 重整 `index.html`、`styles.css` 的基礎 tokens、字體、排版、container、按鈕與 focus states。
- 重寫導覽與 Hero，清楚說明 Barneysbro 是打造城市交通與生活工具的獨立 App studio。
- 使用現有 icon/截圖建立具產品感的 hero composition；不可引用不存在的圖片。
- 保留 `#home`、`#apps`、`#about`、`#contact`。
- 保留中英文切換，並確保切換不破壞按鈕內圖片、ARIA label 或 HTML 結構。
- 導覽支援手機、鍵盤、Escape 關閉、正確的 `aria-expanded`。
- 移除無來源的數據；只有 Task 01 證實的數字才能展示。

## 驗收標準

- 320px 到寬螢幕無水平 overflow。
- Hero 首屏能在 10 秒內回答「誰、做什麼、有哪些產品、下一步去哪」。
- 中英文內容完整，語言偏好可保存。
- 所有主要 CTA 與圖片路徑有效。
- 不導入新的 framework 或 animation library。

## 不做

- 不完成五個 App 的全部詳情。
- 不做高成本 Xcode 截圖。

## 執行紀錄

- 重寫 `index.html` 與 `styles.css`，完成 route-atlas 導覽、Hero、tokens、雙語與響應式基礎。
- 保留所有既有 fragment，改用存在且最佳化的真實產品素材。
- 自託管 Anybody 與精簡字集的 Noto Sans TC，移除 Google Fonts runtime dependency。
