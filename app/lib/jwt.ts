import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string;
}

const DEFAULT_SIGN_OPTIONS: SignOption = {
  expiresIn: "1d",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTIONS
): string {
  const secret_key = process.env.JWT_SECRET_KEY;
  if (!secret_key) {
    throw new Error("JWT_ACCESS_TOKEN_SECRET is not defined");
  }
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verifyJwt(token: string) {
  try {
    const secret_key = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (err) {
    console.log(err);
    return null;
  }
}
