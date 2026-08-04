# Task 01 — App 功能與素材盤點

**狀態：DONE**  
**依賴：Task 00**

## 目的

從真實 App 專案與 App Store 核對功能，建立首頁文案與素材的單一事實來源，移除目前可能過時或未證實的敘述。

## 資料來源

- `/Users/bct-barney/Documents/hkbus`
- `/Users/bct-barney/Documents/tpegarbage`
- `/Users/bct-barney/Documents/tpebus`
- `/Users/bct-barney/Documents/sgbus`
- `/Users/bct-barney/Documents/londonbus`
- App Store 上各 App 的公開頁面
- 網站現有 `images/{HKBUS,SGBUS,TPEGARBAGE,TPEBUS,LONDONBUS}/`

## 工作內容

- 每個 App 整理：使用者問題、核心價值、3–5 個已證實功能、服務地區、資料來源、語言、widget/收藏/定位等能力。
- 核對正確 App Store URL。特別檢查目前首頁內 SGBUS 與 LONDONBUS 的 placeholder/developer URL 不一致問題。
- 核對下載數、評分、版本、檔案大小等會變動數值；無可靠來源就刪除，不猜測。
- 核對目前文案中的 AI、離線、推播、票價、轉乘、EZ-Link/Oyster 等功能是否真的存在。
- 建立中英文短標題、短敘述、完整功能敘述。
- 盤點現有 icon、封面與 36 張網站截圖，為每張圖記錄 App、畫面內容、尺寸、語言、是否過時及建議用途。
- 選出 Phase 1 首頁可直接使用的 hero 圖與每 App 2–4 張代表截圖。

## 產出

- 一份 App content matrix（Markdown 或 JSON，選現有頁面最容易使用的格式）。
- 一份素材 inventory 與 Phase 1 選圖清單。
- 一份待 Phase 2 補拍清單。

## 驗收標準

- 5 個 App 都有來源可追溯的中英文內容。
- 所有 App Store 連結均指向正確產品頁。
- 不保留任何無法證實的產品宣稱。
- Phase 1 不需啟動 Xcode 即有足夠素材。

## 執行紀錄

- 2026-08-04：以五個原始專案與 App Store 公開頁核對功能、資料來源及正式產品 URL。
- 建立 `docs/app-content.md` 與 `docs/asset-inventory.md`；移除無法證實的下載數、AI、離線、票證等宣稱。
- 確認 5 個 icon、36 張原始截圖及 Phase 1 代表畫面。
