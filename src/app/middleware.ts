import { auth } from "@/auth";

export default auth((req) => {
  // req.auth
});

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
