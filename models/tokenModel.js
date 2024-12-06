import jwtToken from "jsonwebtoken";

export class Token {
  static generateToken(user, secretKey) {
    return jwtToken.sign(user, secretKey, { expiresIn: '1h' }); 
  }

  static verifyToken(token, secretKey) {
    debugger;
    const decoded = jwtToken.verify(token, secretKey);
    return decoded;
  }
}
