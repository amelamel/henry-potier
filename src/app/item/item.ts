/*
la classe item repérsente tout produit vendu sur le site
*/
export interface Item {
    isbn: string;
    title: string;
    price: number;
    cover: string;
    author: string;
    synopsis: Array<string>;
    category: string; // category du produit
    customer_review: number; // note d'utilisateur
    show_type: string; // type d'affichage (dans le listing ou dans le panier) 
}
