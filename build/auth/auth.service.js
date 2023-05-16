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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("mongoose");
const bcrypt = require("bcryptjs");
const schema_user_1 = require("./schemas/schema.user");
const mongoose_2 = require("@nestjs/mongoose");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async login(dto) {
        const user = await this.validateUser(dto);
        return this.generateToken(user);
    }
    async registration(dto) {
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const user = await this.userModel.create(Object.assign(Object.assign({}, dto), { password: hashPassword }));
        return this.generateToken(user);
    }
    async generateToken(user) {
        const payload = { email: user.email };
        return {
            token: this.jwtService.sign(payload),
        };
    }
    async validateUser(dto) {
        const user = await this.userModel.find({ email: dto.email });
        const passwordEquals = await bcrypt.compare(dto.password, user[0].password);
        if (user[0] && passwordEquals) {
            return user[0];
        }
        throw new common_1.UnauthorizedException({
            message: "Некорректный e-mail или пароль",
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(schema_user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map