import { NextResponse } from "next/server";

const DIFY_API_URL = "https://api.dify.ai/v1/chat-messages";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.DIFY_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "DIFY_API_KEY is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const query =
      typeof body?.query === "string"
        ? body.query.trim()
        : "";

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          message: "A chatbot query is required.",
        },
        { status: 400 }
      );
    }

    const user =
      typeof body?.user === "string" && body.user.trim()
        ? body.user.trim()
        : "vetdx-assist-user";

    const conversationId =
      typeof body?.conversation_id === "string" &&
      body.conversation_id.trim()
        ? body.conversation_id.trim()
        : undefined;

    const inputs =
      body?.inputs &&
      typeof body.inputs === "object" &&
      !Array.isArray(body.inputs)
        ? body.inputs
        : {};

    const difyBody: Record<string, unknown> = {
      inputs: {
        city: "clinical",
        ...inputs,
      },
      query,
      response_mode: "blocking",
      user,
    };

    if (conversationId) {
      difyBody.conversation_id = conversationId;
    }

    const response = await fetch(DIFY_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(difyBody),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "[VetDx Assist] Dify API error:",
        response.status,
        data
      );

      return NextResponse.json(
        {
          success: false,
          message:
            data?.message ||
            data?.code ||
            "Dify API request failed.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        answer: data.answer ?? "",
        conversationId:
          data.conversation_id ?? null,
        messageId:
          data.message_id ?? null,
      },
    });
  } catch (error: unknown) {
    console.error(
      "[VetDx Assist] Chatbot API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to connect to Dify.",
      },
      { status: 500 }
    );
  }
}