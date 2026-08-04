# Task 05 — 互動與 Scroll 動畫

**狀態：DONE**  
**依賴：Task 03、04**

## 目的

加入能強化敘事的新創網站互動，但保持快速、穩定與可存取。

## 工作內容

- 使用原生 CSS、`IntersectionObserver`、`requestAnimationFrame` 完成最少但有效的 motion。
- 建議效果：首屏進場、段落 reveal、產品截圖錯位/輕微 parallax、數據或路線線條進度、hover/focus micro-interaction。
- scroll handler 必須 passive 或以 rAF 節流；避免每次 scroll 造成大量 layout read/write。
- 修正 nested parallax transform 互相覆蓋、tilt 與基礎 transform 打架等問題。
- motion 只使用 opacity/transform 為主，不製造 layout shift。
- 完整支援 `prefers-reduced-motion: reduce`，降級後內容仍全部可見可用。
- 觸控裝置不依賴 hover；互動不得阻止正常滾動。

## 驗收標準

- 動畫能說明層級或產品關係，不只是裝飾。
- reduced-motion 模式沒有 parallax、tilt、長動畫或自動輪播。
- 手機實機/模擬節流下滾動順暢，無明顯 jank。
- JS 關閉時核心內容與連結仍可使用。
- 無 console error。

## 不做

- 不加入 GSAP、Three.js 或其他大型依賴；只有明確證明原生方案不夠時才另提案。

## 執行紀錄

- 以原生 `IntersectionObserver` 與 rAF scroll state 完成產品進場及五站 route progress。
- 完成手機選單、Escape、語言切換、`aria-current` 與局部 snap scrolling。
- reduced-motion 下不建立 motion-ready 狀態，內容保持完整可見。
