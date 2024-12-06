import bcrypt from 'bcrypt'

export class Authentication {
  static validateCredentialUser(user, password) {
    const passwordFromDatabase = bcrypt.hashSync('senha123', 10);
    const passwordCompare = bcrypt.compareSync(password, passwordFromDatabase);
    return user === 'admin' && passwordCompare;
  }
}
