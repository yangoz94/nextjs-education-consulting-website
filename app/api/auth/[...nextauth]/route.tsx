import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const res = await fetch(process.env.NEXTAUTH_URL + "/api/login", {
          method: "POST",
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // You need to provide your own logic here that takes the credentials

        if (res.ok && user) {
          // If you return an object with contents the user will be authenticated
          console.log("nextauth user found!");
          console.log(user);
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          console.log("nextauth user not found!");
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/admin",
  },

  callbacks: {
    async jwt({ token, user }) {
      // Add access_token to the token right after signin
      return { ...token, ...user };
    },

    async session({ session, token }) {
      // Add property to session, like an access_token from a provider.
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
