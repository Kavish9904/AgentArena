import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;

  return NextResponse.json({
    hasKey: !!apiKey,
    keyPrefix: apiKey?.substring(0, 5),
    keyLength: apiKey?.length,
    isValidFormat: apiKey?.startsWith("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"), // OpenAI keys typically start with 'sk-'
  });
}
