import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const shop = request.nextUrl.searchParams.get("shop");

  const response = NextResponse.next();
  response.headers.set("content-security-policy", `frame-ancestors https://${shop}/ https://admin.shopify.com;`);
  return response;
}
