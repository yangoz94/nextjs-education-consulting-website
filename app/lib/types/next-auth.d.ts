import NextAuth from "next-auth/next";


declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            username: string;
            password: string;
            accessToken: string;
        };
    }
}
            