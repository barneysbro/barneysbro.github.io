# Barneysbro 網站改版任務看板

最後更新：2026-08-04

## 目標

在**不改變任何既有公開路徑**的前提下，將靜態 GitHub Pages 網站改造成具新創產品工作室風格、清楚介紹 5 個 App、具節制互動與 scroll 動畫的響應式網站。

## 狀態定義

- `TODO`：尚未開始
- `IN PROGRESS`：執行中
- `BLOCKED`：等待資料或決策
- `DONE`：完成且通過驗收

## 任務

| ID | 任務 | 狀態 | 依賴 |
|---|---|---|---|
| 00 | [基線、路徑與改版護欄](00-baseline-and-route-guard.md) | DONE | — |
| 01 | [App 功能與素材盤點](01-product-content-and-assets.md) | DONE | 00 |
| 02 | [Impeccable 設計方向與內容架構](02-design-direction.md) | DONE | 00、01 |
| 03 | [首頁視覺基礎與 Hero](03-homepage-foundation-and-hero.md) | DONE | 02 |
| 04 | [五個 App 產品展示](04-app-showcase.md) | DONE | 01、03 |
| 05 | [互動與 Scroll 動畫](05-motion-and-interactions.md) | DONE | 03、04 |
| 06 | [既有支援與法律頁視覺整合](06-existing-pages.md) | DONE | 03 |
| 07 | [響應式、無障礙、效能與 SEO 驗收](07-quality-and-release.md) | DONE | 04、05、06 |
| 08 | [Phase 2：更新 App 截圖](08-phase-2-screenshots.md) | DONE | 07 |

## 已完成的準備

- [x] 以 project scope 安裝 Impeccable：`.pi/skills/impeccable/`
- [x] 確認網站是無 bundler 的靜態 HTML/CSS/JS GitHub Pages 專案
- [x] 確認網站內已有 5 個 App 的 icon 與共 36 張截圖，可先完成 Phase 1
- [x] 找到 5 個 App 原始專案，可用於功能核對與 Phase 2 素材更新
- [x] 建立可逐項交付給 agent 的任務文件

## 全域護欄

1. 不重新命名、搬移或移除任何既有公開檔案與 URL。
2. 保留 `/`、`/index.html`、`/lost.html`、`/en/lost.html`、`/privacy.html`、`/terms.html`、`/app-ads.txt`、`/robots.txt`、`/sitemap.xml`。
3. 保留首頁既有 fragment：`#home`、`#apps`、`#about`、`#contact`。
4. 不改法律條文與遺失物聯絡資料的語意；只在對應任務中調整呈現。
5. 不把尚未由 App 原始碼或 App Store 證實的下載數、評分、版本、AI 功能寫上線。
6. 優先沿用靜態 HTML/CSS/JS，不為動畫或元件引入 framework。
7. 所有 motion 必須支援 `prefers-reduced-motion`，所有互動須可用鍵盤操作。
8. 每個 agent 開始與完成任務時，都要同步更新本看板及該任務的「執行紀錄」。

## 目前工作樹注意事項

規劃建立前，`index.html`、`privacy.html`、`script.js`、`styles.css`、`terms.html` 已有未提交修改，`legal.css` 已存在但未追蹤。執行 agent 不得假設這些變更可丟棄，也不得使用 reset/checkout 覆蓋它們。
