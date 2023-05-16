/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { CreateCategoryDto } from "src/products/dto/create-category.dto";
import { Category } from "src/categories/schemas/schema.categories";
import { CategoriesService } from "./categories.service";
export declare class CategoriesController {
    private categoryService;
    constructor(categoryService: CategoriesService);
    getAll({ page, size }: {
        page: any;
        size: any;
    }): Promise<import("./categories.service").IAllCategories>;
    getCategory(name: any): Promise<(Category & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    add(dto: CreateCategoryDto): Promise<Category>;
    update(id: any, dto: CreateCategoryDto): Promise<Category>;
    delete(id: any): Promise<Category>;
}
