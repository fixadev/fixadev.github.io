import { NextResponse } from "next/server";

export const maxDuration = 30;

interface InsightData {
  last_refresh: string;
  cache_target_age: string;
  next_allowed_client_refresh: string;
  result: unknown[];
}

export async function GET() {
  const projectId = "128584";
  const insightId = "2611349";
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const analyticsScriptUrl = process.env.ANALYTICS_SCRIPT_URL;

  if (!apiKey) {
    return NextResponse.json(
      { error: "PostHog API key not configured" },
      { status: 500 }
    );
  }

  try {
    const url = `https://us.posthog.com/api/projects/${projectId}/insights/${insightId}`;
    // const url = `https://us.posthog.com/api/projects/${projectId}/insights`;
    // console.log("Fetching from:", url);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: InsightData = await response.json();
    const num = data.result.length;
    const lastRefresh = data.last_refresh;
    console.log("NUM ROWS", num);
    console.log("last refresh", lastRefresh);

    // Send data to analytics script
    if (analyticsScriptUrl) {
      const formData = new FormData();
      formData.append("num", num.toString());
      formData.append("last_refresh", lastRefresh);

      await fetch(analyticsScriptUrl, {
        method: "POST",
        body: formData,
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching PostHog insights:", error);
    return NextResponse.json(
      { error: "Failed to fetch PostHog insights" },
      { status: 500 }
    );
  }
}
