import { signIn, useSession } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useRef } from "react";

export function useAdminLogin() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const { data: session } = useSession();
  const router = useRouter();

  const handleAdminLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (session && session.user) {
      // Admin already logged in (unlikely due to middleware redirect but just in case)
      console.log("Admin already logged in");
      return;
    }

    try {
      const result = await signIn("credentials", {
        username: usernameRef.current,
        password: passwordRef.current,
        // if login is successful, redirect to /admin/dashboard if not dont redirect
        redirect: false,
        callbackUrl: "/admin/dashboard",
      });

      if (result?.error) {
        alert("Invalid Credentials - Try again or contact admin");
      } else {
        router.push("/admin/dashboard");
      }

      console.log(result);
      return result;
    } catch (error: any) {
      throw new Error("Error while authenticating admin/user ", error);
    }
  };

  return { usernameRef, passwordRef, handleAdminLogin };
}
