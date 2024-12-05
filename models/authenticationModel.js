export class Authentication {
  static validateCredentialUser(user, password) {
    return user === 'admin' && password === 'senha123';
  }
}
