import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/VarificationEmail";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mistry message | Verification code",
      react: VerificationEmail(username, verifyCode),
    });

    return { success: true, message: "Verification email send successfully" };
  } catch (emailError) {
    console.error("Error sending verification error", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
