import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { db } from "@/src/lib/database/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: UpstashRedisAdapter(db),
  providers: [Google],
  session: { strategy: "jwt" },
});
