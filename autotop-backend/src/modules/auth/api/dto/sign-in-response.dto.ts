import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  accessToken: string;

  constructor({ user, token }) {
    this.userId = user.id;
    this.fullName = user.fullName;
    this.email = user.email;
    this.accessToken = token;
  }
}
