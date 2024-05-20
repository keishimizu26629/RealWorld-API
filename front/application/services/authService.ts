import { AuthUser } from '../../domain/entities/user';

export class AuthService {
  private loginFn: any;

  constructor(loginFn: any) {
    this.loginFn = loginFn;
  }

  async login(user: AuthUser): Promise<string> {
    const { email, password } = user;
    const data = await this.loginFn(email, password);
    return data.token;
  }
}
