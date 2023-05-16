import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
}
