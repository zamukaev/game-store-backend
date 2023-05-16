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
exports.CreateCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCategoryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Офис и сеть",
        description: "Наименование категории",
    }),
    (0, class_validator_1.IsString)({ message: "Должно быть строкой" }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "url",
        description: "Ссылка на изображение категории",
    }),
    (0, class_validator_1.IsString)({ message: "Должно быть строкой" }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "urlImg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            { id: 1, title: "wi-fi роутеры", urlImg: "url" },
            { id: 2, title: "мыши", urlImg: "url" },
        ],
        description: "Подкатегории",
    }),
    (0, class_validator_1.IsArray)({ message: "Должно быть array" }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "subcategories", void 0);
exports.CreateCategoryDto = CreateCategoryDto;
//# sourceMappingURL=create-category.dto.js.map