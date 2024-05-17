import { AuthRepository } from '../../types/authTypes';
import { User } from '../../domain/entities/user';

export class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async login(user: User): Promise<string> {
    const { email, password } = user;
    const data = await this.authRepository.login(email, password);
    return data.token;
  }
}
