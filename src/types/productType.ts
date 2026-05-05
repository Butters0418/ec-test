// 一般商品 type
export interface ProductType {
  title: string;
  price: number;
  score: number;
  discount: number;
  cover: string;
}

// 購物車商品 type
export interface CartProductType extends ProductType {
  quantity: number;
}
