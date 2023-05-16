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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_product_1 = require("./schemas/schema.product");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getAllProducts(page, size) {
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 8;
        }
        const skip = (page - 1) * size;
        const products = await this.productModel.find().limit(size).skip(skip);
        const allProducts = await this.productModel.find();
        return {
            products,
            count: allProducts.length,
        };
    }
    async getProductById(id) {
        return this.productModel.findById(id);
    }
    async getProductByCategories(name) {
        const products = await this.productModel.find({ category: name });
        return {
            products,
            count: products.length,
        };
    }
    async getProductsHits(page, size) {
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 8;
        }
        const skip = (page - 1) * size;
        const products = await this.productModel
            .find({ hit: true })
            .limit(size)
            .skip(skip);
        const allProducts = await this.productModel.find({ hit: true });
        return {
            products,
            count: allProducts.length,
        };
    }
    async getProductsPromotions(page, size) {
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 8;
        }
        const skip = (page - 1) * size;
        const products = await this.productModel
            .find({ promotion: true })
            .limit(size)
            .skip(skip);
        const allProducts = await this.productModel.find({ promotion: true });
        return {
            products,
            count: allProducts.length,
        };
    }
    async searchProduct(name, page, size) {
        const regex = new RegExp(name, "i");
        if (!page) {
            page = 1;
        }
        if (!size) {
            size = 8;
        }
        const skip = (page - 1) * size;
        const products = await this.productModel
            .find({ title: regex })
            .limit(size)
            .skip(skip);
        const allProducts = await this.productModel.find({ title: regex });
        return {
            products,
            count: allProducts.length,
        };
    }
    async createProduct(productDto) {
        const newProduct = new this.productModel(Object.assign(Object.assign({}, productDto), { hit: productDto.hit ? productDto.hit : false, promotion: productDto.promotion ? productDto.promotion : false }));
        return newProduct.save();
    }
    async updateProduct(id, productDto) {
        return this.productModel.findByIdAndUpdate(id, {
            $set: productDto,
        });
    }
    async deleteProduct(id) {
        return this.productModel.findByIdAndDelete(id);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_product_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map