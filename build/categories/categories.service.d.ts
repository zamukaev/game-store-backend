/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from "mongoose";
import { CreateCategoryDto } from "src/products/dto/create-category.dto";
import { Category, CategoryDocument } from "src/categories/schemas/schema.categories";
export interface IAllCategories {
    categories: Category[];
    count: number;
}
export declare class CategoriesService {
    private CategoryModel;
    constructor(CategoryModel: Model<CategoryDocument>);
    getAllProducts(page: number, size: number): Promise<IAllCategories>;
    getCategory(name: string): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addCategory(dto: CreateCategoryDto): Promise<Category>;
    updateCategory(id: string, categoryDto: CreateCategoryDto): Promise<Category>;
    deleteCategory(id: string): Promise<Category>;
}
