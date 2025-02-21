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
