import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "./services/AuthService";

type Role = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/register",];

const roleBasedPrivateRoutes = {
    tutor: [/^\/tutor/],
    student: [/^\/student/, /^\/profile/]

};

export const middleware = async (request: NextRequest) => {
    const { pathname } = request.nextUrl;

    const userInfo = await currentUser();

    if (!userInfo) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(
                new URL(
                    `https://tutorsync-x-clint.vercel.app/login?redirectPath=${pathname}`,
                    // `http://localhost:3000/login?redirectPath=${pathname}`,
                    request.url
                )
            );
        }
    }

    if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
        const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL("/", request.url));
};


export const config = {
    matcher: [
        "/login",
        "/profile",
        "/tutors/:path*",
        "/student/:path*",
    ],
};
