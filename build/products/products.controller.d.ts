import { CreateProductDto } from "./dto/create-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/schema.product";
export interface PaginationOptionsInterface {
    limit: number;
    page: number;
}
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll({ page, size }: {
        page: any;
        size: any;
    }): Promise<import("./products.service").IAllProducts>;
    getProduct(id: any): Promise<Product>;
    getProductsCategory(name: any): Promise<import("./products.service").IAllProducts>;
    getProductsHits({ page, size }: {
        page: any;
        size: any;
    }): Promise<import("./products.service").IAllProducts>;
    getProductsPromotions({ page, size }: {
        page: any;
        size: any;
    }): Promise<import("./products.service").IAllProducts>;
    search(name: any, { page, size }: {
        page: any;
        size: any;
    }): Promise<import("./products.service").IAllProducts>;
    create(productDto: CreateProductDto): Promise<Product>;
    update(id: any, productDto: CreateProductDto): Promise<Product>;
    delete(id: any): Promise<Product>;
}
