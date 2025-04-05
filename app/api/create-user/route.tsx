import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { verifyJwt } from "@/app/lib/jwt";
import { UserEntity } from "@/app/entities/UserDDB";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    try {
      const accessToken = request.headers.get("Authorization");
      if (!accessToken || !verifyJwt(accessToken)) {
        return new NextResponse(
          JSON.stringify({
            error: "Unauthorized Request: Invalid/No access token",
          }),
          {
            status: 401,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      const body = await request.json();
      const user = {
        username: body.username as string,
        password: await bcrypt.hash(body.password, 10),
      }
      console.log("user data " + user)

      const PK = `USER#${user.username}`;
      const SK = 'METADATA';
      const isUserExist =  (await UserEntity.get({ PK, SK })).Item

      if (isUserExist !== null) {
        return new NextResponse(
          JSON.stringify({
            error: "User already exists",
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      await UserEntity.put({
        username: user.username,
        password: user.password,
      });
    
      const { password, ...userWithoutPass } = user;
      return new NextResponse(JSON.stringify(userWithoutPass), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error: any) {
      console.log(error.message)
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
