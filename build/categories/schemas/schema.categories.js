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
exports.CategorySchema = exports.Category = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Category = class Category {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Офис и сеть",
        description: "Наименование категории",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "url",
        description: "Ссылка на изображение категории",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Category.prototype, "urlImg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            { id: 1, title: "wi-fi роутеры", urlImg: "url" },
            { id: 2, title: "мыши", urlImg: "url" },
        ],
        description: "Подкатегории",
    }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Category.prototype, "subcategories", void 0);
Category = __decorate([
    (0, mongoose_1.Schema)()
], Category);
exports.Category = Category;
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
//# sourceMappingURL=schema.categories.js.map