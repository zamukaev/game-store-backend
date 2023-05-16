import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserDocument } from "./schemas/schema.user";
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    login(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(dto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
