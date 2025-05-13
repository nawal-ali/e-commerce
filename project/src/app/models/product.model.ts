// src/app/models/product.model.ts
export interface Review {
    user_id: number;
    rating: number;
    comment: string;
}
export interface Product {
    product_id: number;
    name: string;
    img: string;
    price: number;
    oldPrice: number;
    discount: number;
    rating: number;
    brand: string;
    description: string;
    category: string;
    displaySize: string;
    resolution: string;
    displayType: string;
    dailySale: boolean;
    monthSale: boolean;
    reviews: Review[];
}
