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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_category_dto_1 = require("../products/dto/create-category.dto");
const schema_categories_1 = require("./schemas/schema.categories");
const categories_service_1 = require("./categories.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let CategoriesController = class CategoriesController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    getAll({ page, size }) {
        return this.categoryService.getAllProducts(page, size);
    }
    getCategory(name) {
        return this.categoryService.getCategory(name);
    }
    add(dto) {
        return this.categoryService.addCategory(dto);
    }
    update(id, dto) {
        return this.categoryService.updateCategory(id, dto);
    }
    delete(id) {
        return this.categoryService.deleteCategory(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение всех категорий" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_categories_1.Category] }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение категории" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: schema_categories_1.Category }),
    (0, common_1.Get)("/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "getCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Добавление категории" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_categories_1.Category] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "add", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Обновление категории" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_categories_1.Category] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Удаление категории" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_categories_1.Category] }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoriesController.prototype, "delete", null);
CategoriesController = __decorate([
    (0, swagger_1.ApiTags)("categories"),
    (0, common_1.Controller)("categories"),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map