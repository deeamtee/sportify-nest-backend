import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.ru', description: 'Почта пользователя' })
  readonly email: string;

  @ApiProperty({ example: '123456qwe', description: 'Пароль пользователя' })
  readonly password: string;
}
