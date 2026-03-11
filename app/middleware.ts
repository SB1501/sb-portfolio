import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
    matcher: ["/cv-private/:path*"],
};

function unauthorized() {
    return new NextResponse("Authentication required.", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="Private CV"',
        },
    });
}

export function middleware(req: NextRequest) {
    const user = process.env.CV_USER || "";
    const pass = process.env.CV_PASS || "";

    // If you forget to set env vars, fail closed.
    if (!user || !pass) return unauthorized();

    const auth = req.headers.get("authorization");
    if (!auth?.startsWith("Basic ")) return unauthorized();

    const base64 = auth.slice("Basic ".length);
    const decoded = Buffer.from(base64, "base64").toString("utf8");
    const [u, p] = decoded.split(":");

    if (u === user && p === pass) return NextResponse.next();
    return unauthorized();
}