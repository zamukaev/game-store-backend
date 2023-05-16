import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product, ProductDocument } from "./schemas/schema.product";
export interface IAllProducts {
    products: Product[];
    count: number;
}
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    getAllProducts(page: number, size: number): Promise<IAllProducts>;
    getProductById(id: string): Promise<Product>;
    getProductByCategories(name: string): Promise<IAllProducts>;
    getProductsHits(page: number, size: number): Promise<IAllProducts>;
    getProductsPromotions(page: number, size: number): Promise<IAllProducts>;
    searchProduct(name: string, page: number, size: number): Promise<IAllProducts>;
    createProduct(productDto: CreateProductDto): Promise<Product>;
    updateProduct(id: string, productDto: CreateProductDto): Promise<Product>;
    deleteProduct(id: string): Promise<Product>;
}
