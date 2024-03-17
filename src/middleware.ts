import { auth } from "@/auth";

export default auth((req) => {
  console.log("middleware", req.url, req.auth);
  // req.auth
});

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
