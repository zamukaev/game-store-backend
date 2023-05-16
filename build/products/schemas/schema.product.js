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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Product = class Product {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Wi-Fi роутер D-Link DIR-300",
        description: "Наименование продукта",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "4x100 Мбит/с, 4 (802.11n), Wi-Fi 250 Мбит/с",
        description: "Описание",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "desc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Создание беспроводной сети Беспроводной маршрутизатор DIR-300/NRU Wireless 150 (до 150 Мбит/с) позволяет создать беспроводную сеть для дома. Подключив беспроводной маршрутизатор к выделенной линии или широкополосному модему, пользователи могут совместно использовать высокоскоростное соединение с Интернет для поиска информации в Web, проверки электронной почты и общения on-line с друзьями и семьей.",
        description: "Характеристики",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "characteristic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Wi-Fi роутеры", description: "Категория" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2499, description: "Цена" }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: "Хит" }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "hit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: "Акция" }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Boolean)
], Product.prototype, "promotion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ["url1", "url2", "url3", "url4"],
        description: "Изображения товара",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Product.prototype, "urlImages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3499, description: "Старая цена" }),
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", Number)
], Product.prototype, "oldPrice", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)()
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=schema.product.js.map