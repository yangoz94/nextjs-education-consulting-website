import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signJwtAccessToken } from "@/app/lib/jwt";
import { UserEntity } from "@/app/entities/UserDDB";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;
  console.log(await bcrypt.hash(password, 10));

  const user = (await UserEntity.get({ PK: `USER#${username}`, SK: "METADATA" })).Item;
  if (user && (await bcrypt.compare(password, user.password))) {
    const { password, ...userWithoutPass } = user;
    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };
    return new NextResponse(JSON.stringify(result ), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return new NextResponse(JSON.stringify({message: "Invalid Credentials"}), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
      
    });
  }
}
