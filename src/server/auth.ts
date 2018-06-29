import * as passport from 'koa-passport';
import { testUser } from './db/models/testUser';

passport.serializeUser<any, any>((user, done) => { 
  done(null, user.id); 
});

// passport.deserializeUser((id, done) => {
//   testUser.findById({id}, (err, user) => {
//     done(err, user);
//   });
// });