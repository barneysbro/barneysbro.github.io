# Task 02 — Impeccable 設計方向與內容架構

**狀態：DONE**  
**依賴：Task 00、01**

## 目的

在動手改 HTML 前，定義有辨識度的新創產品工作室視覺與敘事，避免落入通用 SaaS template。

## 工作內容

- 讀取已安裝的 `.pi/skills/impeccable/SKILL.md` 與相關 reference。
- 執行 `/impeccable init`，把此網站設定為 marketing/brand surface，建立或更新 `PRODUCT.md`、`DESIGN.md`。
- 以 Impeccable `shape`/`critique` 流程確立首頁資訊層級。
- 定義設計方向：
  - 城市移動與日常基礎設施感，而非泛用科技漸層。
  - 有特色的字體層級、色彩、間距、線條、裝置展示與每 App 區域色。
  - 節制、具目的的 hover、scroll reveal、sticky/scroll-linked 效果。
- 規劃首頁段落：Hero → studio proof → 5 App stories → 方法/理念 → contact/footer。
- 決定哪些內容留在首頁、哪些不需要 modal；優先減少隱藏內容與重複文案。
- 提供 desktop/mobile 線框與 motion notes。

## 驗收標準

- `PRODUCT.md` 與 `DESIGN.md` 能讓下一位 agent 不需重新猜測方向。
- 設計不是紫藍漸層、Inter、卡片套卡片的通用 SaaS 版型。
- 五個 App 都能在頁面主流程中清楚理解，不依賴點開 modal。
- motion 有目的、可降級，且不阻礙閱讀。

## 不做

- 不在此 task 大幅修改 production HTML/CSS/JS。
- 不生成新截圖。

## 執行紀錄

- 建立 `PRODUCT.md`，完成 Impeccable context/init 所需的產品事實。
- 執行 direction concept seed `235bf458`，採用「City Route Atlas」方向。
- 建立 `DESIGN.md`、`.impeccable/design.json` 與 `.impeccable/surfaces/index-html.md`。
