import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("Set-Cookie API route called");
  const response = NextResponse.json({ message: "Cookie is set" });
  response.cookies.set({
    name: "key",
    value: "value",
    path: "/",
    httpOnly: true,
    secure: true,
  });
  return response;
}
