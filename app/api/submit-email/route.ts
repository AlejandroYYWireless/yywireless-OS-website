import { jsx } from "react/jsx-runtime";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import CustomerInquiryTemplate from "./customer-inquery-template";

const emailMap = {
  WHOLESALE: "nick@yywireless.com",
  "CUSTOMER SERVICE": "cs@yywireless.com",
  RETAIL: "cs@yywireless.com",
  GENERAL: "cs@yywireless.com",
  MARKETING: "kitty@yywireless.com",
  CAREER: "brianne@yywireless.com",
} as const;

type emailMapType = keyof typeof emailMap;

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    // validating the request
    const body = requestBody?.body;
    const from = requestBody?.from;
    const category = requestBody?.category;
    if (!body || !from || !category) {
      return NextResponse.json(
        { error: "Missing body or from" },
        { status: 400 },
      );
    }

    // grabbing the api key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing API KEY" },

        { status: 500 },
      );
    }
    // using resend to send the email

    const upperCaseCategory = category.toUpperCase() as emailMapType;
    const toEmail = emailMap[upperCaseCategory];

    try {
      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: "no_reply@yymail.yywireless.com",
        to: toEmail,
        replyTo: "no_reply@yymail.yywireless.com",
        subject: `YYWireless - ${category ?? "unset category"} Customer Inquiry`,
        react: jsx(CustomerInquiryTemplate, {
          email: from,
          body: body,
          category: category,
        }),
      });
      if (error) {
        throw new Error(error?.message ?? "Unknown error");
      }
      //success case
      if (data) {
        return NextResponse.json(
          { data: "Email successfully delivered", success: true },
          { status: 200 },
        );
      }
    } catch (err) {
      return NextResponse.json({ error: err?.toString() }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to submit email",
      },
      { status: 400 },
    );
  }
}
