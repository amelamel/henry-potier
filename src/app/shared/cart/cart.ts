export interface Cart {
    items: ItemOrder[], 
    total_items: number;
    old_price?: number;
    new_price?: number;
    offer_price?: number;
}

export interface ItemOrder{
    isbn?: string,
    image?: string;
    quantity: number,
    price: number,
    title?: string
}