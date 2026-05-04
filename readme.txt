請使用你慣用的 React 開發環境，參考以下設計稿網址，進行切版及購物車邏輯撰寫，並請注意以下事項：

https://www.figma.com/design/ntJ3JyousvGp6GAnGOAMDv/E-commerce-Website-Template--Freebie---Community---Copy-


切版部份
* 請執行 category page 及 cart 兩頁。(設計稿只有兩個 RWD 斷點，mobile 及 desktop，tablet 參考 mobile 排版即可)。
* 請依照設計稿需求選用適切語意及功能的 html tag。
* 使用 tailwindcss 執行，間距大小及文字大小選接近的 utility class 即可。
* 設計稿內的特殊字體，切版時使用系統字即可(windows: 微軟正黑體 / Mac: 蘋方體)。

邏輯部份
* category 頁面的列表請使用原生 fetch 讀取 api/productions.json 後進行 render。
* 請使用 localstorage 模擬實際加入購物車的功能。
* cart 頁面讀取 localstorage 後進行 render，並實作商品的 增減 / 刪除 / 折扣 / 總量 / 總價 等操作。

UI / UX
* 前端工程師最大的價值就是在設計美感不失真的情況下提供最好的使用者體驗，設計稿上 UX 不足或 UI 不合理的的部份可依個人觀點進行補強。