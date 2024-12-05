import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'abc';

if (!SECRET_KEY) {
  throw new Error("A chave secreta (JWT_SECRET_KEY) não está definida.");
}

passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET_KEY,
    },
    (jwtPayload, done) => {
      const user = { username: jwtPayload.username };

      if (user) {
        return done(null, user);
      } else {
        console.log('cai aqui!!!')
        const error = new Error("Usuário não autorizado");
        error.status = 401;
        error.message = 'dhsgfhsd';
        return done(null, false, { message: 'Incorrect username.' });
      }
    }
  )
);

export const authenticate = passport.authenticate('jwt', { session: false });
