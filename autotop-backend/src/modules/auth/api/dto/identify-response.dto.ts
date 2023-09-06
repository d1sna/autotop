import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class IdentifyResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  constructor(user) {
    this.userId = user.id;
    this.fullName = user.fullName;
    this.email = user.email;
  }
}
