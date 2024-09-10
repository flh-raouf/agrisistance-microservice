import { IsString, IsOptional, IsNotEmpty, IsIn, Matches } from "class-validator";
export class UserSubscriptionReqDto {
    @IsString()
    @IsOptional()
    user_id?: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['Basic', 'Premium'], {
        message: 'Subscription type must be either Premium or Basic',
    })
    subscription: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^pm_[a-zA-Z0-9_]+$/, {
        message: 'Invalid payment method ID format',
    })
    payment_method: string;
}