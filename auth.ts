import NextAuth from "next-auth";
import Google from "@auth/core/providers/google";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { db } from "@/src/lib/database/db";

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: UpstashRedisAdapter(db),
  providers: [Google],
  session: { strategy: "jwt" },
  pages: {
    // signIn: "/login",
  },
  callbacks: {
    session({ session, token }) {
      if (token != null && token.sub != null) {
        session.user.id = token.sub;
      }
      return session;
    },
    redirect() {
      return "/dashboard";
    },
  },
});
