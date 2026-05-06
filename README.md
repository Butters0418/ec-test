# ec-test

**🌐 Demo** : [https://ec-test.butters.idv.tw/](https://ec-test.butters.idv.tw/)

## 實作功能

- 完成 Category 與 Cart 頁面切版
- fetch 讀取 `api/productions.json` 後進行 render
- 將購物車資料存至 localStorage，實作商品的增減、刪除、折扣、總量、總價等操作

## UI / UX 補強

- 因 demo 需求，將 Category 頁路由設為首頁 (home)
- 商品價格推算邏輯 : 視 discount 為折扣百分比，新折扣價需 x 原始 price
- 新增 : 頂部橫幅關閉功能
- 新增 : Header 購物車 icon 數量標示
- 新增 : Fetch 期間顯示骨架屏；商品數為 0 時顯示「無符合商品」
- 新增 : 購物車為空時的狀態樣式

## 技術棧

| 類型     | 套件                                                            |
| -------- | --------------------------------------------------------------- |
| 執行環境 | Node.js v20.19                                                  |
| 核心     | React 19、TypeScript 6                                          |
| 建置工具 | Vite 8                                                          |
| 樣式     | Tailwind CSS v4                                                 |
| 路由     | React Router DOM v7                                             |
| 狀態管理 | Zustand v5（persist middleware，購物車持久化存至 localStorage） |
| Icon     | react-icons v5                                                  |
| Skeleton | react-loading-skeleton v3                                       |
