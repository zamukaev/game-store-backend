"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_categories_1 = require("./schemas/schema.categories");
let CategoriesService = class CategoriesService {
    constructor(CategoryModel) {
        this.CategoryModel = CategoryModel;
    }
    async getAllProducts(page, size) {
        if (!size) {
            size = 8;
        }
        const skip = (page - 1) * size;
        const categories = await this.CategoryModel.find().limit(size).skip(skip);
        const allCategories = await this.CategoryModel.find();
        return {
            categories,
            count: allCategories.length,
        };
    }
    async getCategory(name) {
        const category = await this.CategoryModel.find({ title: name });
        return category;
    }
    async addCategory(dto) {
        const newProduct = new this.CategoryModel(Object.assign({}, dto));
        return newProduct.save();
    }
    async updateCategory(id, categoryDto) {
        return this.CategoryModel.findByIdAndUpdate(id, {
            $set: categoryDto,
        });
    }
    async deleteCategory(id) {
        return this.CategoryModel.findByIdAndDelete(id);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_categories_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map