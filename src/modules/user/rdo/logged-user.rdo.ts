import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @Expose()
    accessToken!: string;

  @Expose()
    refreshToken!: string;
}
