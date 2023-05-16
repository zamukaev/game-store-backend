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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const create_product_dto_1 = require("./dto/create-product.dto");
const products_service_1 = require("./products.service");
const schema_product_1 = require("./schemas/schema.product");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getAll({ page, size }) {
        return this.productsService.getAllProducts(page, size);
    }
    getProduct(id) {
        return this.productsService.getProductById(id);
    }
    getProductsCategory(name) {
        return this.productsService.getProductByCategories(name);
    }
    getProductsHits({ page, size }) {
        return this.productsService.getProductsHits(page, size);
    }
    getProductsPromotions({ page, size }) {
        return this.productsService.getProductsPromotions(page, size);
    }
    search(name, { page, size }) {
        return this.productsService.searchProduct(name, page, size);
    }
    create(productDto) {
        return this.productsService.createProduct(productDto);
    }
    update(id, productDto) {
        return this.productsService.updateProduct(id, productDto);
    }
    delete(id) {
        return this.productsService.deleteProduct(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение всех продуктов" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_product_1.Product] }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение продукта" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: schema_product_1.Product }),
    (0, common_1.Get)("/product/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение продуктов по категории" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_product_1.Product] }),
    (0, common_1.Get)("/category/:name"),
    __param(0, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductsCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение продуктов 'хиты'" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_product_1.Product] }),
    (0, common_1.Get)("/hits"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductsHits", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Получение продуктов 'акции'" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_product_1.Product] }),
    (0, common_1.Get)("/promotions"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductsPromotions", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Поиск товара" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [schema_product_1.Product] }),
    (0, common_1.Get)("/search/:name"),
    __param(0, (0, common_1.Param)("name")),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "search", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Создание продукта" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: schema_product_1.Product }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Обновление продукта" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: schema_product_1.Product }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Удаление продукта" }),
    (0, swagger_1.ApiResponse)({ status: 200, type: schema_product_1.Product }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "delete", null);
ProductsController = __decorate([
    (0, swagger_1.ApiTags)("products"),
    (0, common_1.Controller)("products"),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map