import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.OPENAI_API_KEY;

  return NextResponse.json({
    hasKey: !!apiKey,
    keyPrefix: apiKey?.substring(0, 5),
    keyLength: apiKey?.length,
    isValidFormat: apiKey?.startsWith("sk-"), // OpenAI keys typically start with 'sk-'
  });
}
