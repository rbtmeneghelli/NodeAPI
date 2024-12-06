import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

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
        return done(null, false);
      }
    }
  )
);

export const authenticate = passport.authenticate("jwt", { session: false });
