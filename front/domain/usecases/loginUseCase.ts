import { AuthService } from '../../application/services/authService';
import { User } from '../entities/user';

export class LoginUseCase {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async excute(user: User): Promise<string> {
    return this.authService.login(user);
  }
}
