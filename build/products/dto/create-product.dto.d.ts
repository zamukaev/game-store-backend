export declare class CreateProductDto {
    readonly title: string;
    readonly desc: string;
    readonly characteristic: string;
    readonly category: string;
    readonly price: number;
    readonly urlImages: [];
    readonly hit: boolean;
    readonly promotion: boolean;
    readonly oldPrice?: number;
}
