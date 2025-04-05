export async function verifyRecaptcha(token: string): Promise<Boolean> {
  try {
    const secret = process.env.RECAPTCHA_SECRET as string;
    const recaptchaVerificationResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        },
      }
    );
    const recaptchaVerificationResponseData =
      await recaptchaVerificationResponse.json();
    console.log(recaptchaVerificationResponseData);
    if (
      recaptchaVerificationResponseData.success &&
      recaptchaVerificationResponseData.score > 0.7
    ) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to verify recaptcha token");
  }
}
