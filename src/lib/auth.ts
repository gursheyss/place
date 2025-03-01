import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './server/db';
import { TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET } from '$env/static/private';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg"
  }),
  socialProviders: {
    twitch: {
      clientId: TWITCH_CLIENT_ID,
      clientSecret: TWITCH_CLIENT_SECRET,
    }
  }
});
