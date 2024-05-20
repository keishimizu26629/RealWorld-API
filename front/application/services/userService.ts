export class UserService {
  private getUserDataFn: any;

  constructor(getUserDataFn: any) {
    this.getUserDataFn = getUserDataFn;
  }

  async getUserData(token: string): Promise<any> {
    const data = await this.getUserDataFn(token);
    return data;
  }
}
