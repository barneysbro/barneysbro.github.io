# Task 06 — 既有支援與法律頁視覺整合

**狀態：DONE**  
**依賴：Task 03**

## 目的

讓既有深層頁面與新首頁視覺一致，同時保持 URL 與實際內容穩定。

## 頁面

- `privacy.html`
- `terms.html`
- `lost.html`
- `en/lost.html`

## 工作內容

- 抽取/沿用現有 `legal.css` 或最少共用樣式，減少 privacy/terms 的重複 inline CSS。
- 套用首頁字體、色彩、導覽/返回連結、footer 與 focus style。
- 保留法律條文、遺失物公司資料、電話、服務時間與語言版本的語意。
- 修正不存在的 favicon/圖片參照，但不改公開頁面 URL。
- 確認 App 內 webview 可能使用的版面在窄螢幕仍可閱讀。
- 若要調整內容，先列 diff 並要求核准；純視覺調整可直接做。

## 驗收標準

- 四個 URL 原路徑可直接開啟，無 redirect 依賴。
- 法律條文與聯絡資料沒有意外刪減。
- 320px 寬可讀，電話與 email 可點擊，focus 清楚。
- 共用樣式沒有破壞 lost 頁的中英文差異。

## 不做

- 不將頁面搬到新資料夾。
- 不把中英文 lost 頁合併成需要 JS 才能閱讀的單頁。

## 執行紀錄

- `privacy.html` 與 `terms.html` 保留原文，移除重複 inline CSS 並統一使用 `legal.css`。
- 修正 favicon、字體與返回首頁控制；`lost.html`、`en/lost.html` 加入穩定首頁入口及共用 `support.css`。
- 移除 emoji 控制但保留所有遺失物電話、網址、服務時間與語意。
