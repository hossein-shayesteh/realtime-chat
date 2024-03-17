import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const pathname = req.nextUrl.pathname;
  const isLogin = req.auth;
  const loginPath = pathname.startsWith("/login");

  //manage route protection
  const sensitiveRoute = ["/dashboard"];
  const isAccessingSensitiveRoutes = sensitiveRoute.some((route) =>
    pathname.startsWith(route),
  );

  // if user is already login redirect to dashboard
  if (loginPath && isLogin)
    return NextResponse.redirect(new URL("/dashboard", req.url));

  // if user is not login redirect to login page
  if (!isLogin && isAccessingSensitiveRoutes)
    return NextResponse.redirect(new URL("/login", req.url));
});

export const config = {
  matcher: ["/", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
