import jwtToken from "jsonwebtoken";

export class Token {
  static generateToken(user, secretKey) {
    return jwtToken.sign(user, secretKey, { expiresIn: '1h' }); 
  }

  static verifyToken(id, secretKey) {
    return jwtToken.verify(token, secretKey);
  }
}
