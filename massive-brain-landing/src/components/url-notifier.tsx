"use client";

import { useEffect } from "react";

export function UrlNotifier() {
  useEffect(() => {
    // Check if there are any query parameters
    if (window.location.search) {
      // Get the current URL
      const currentUrl = window.location.href;

      // Send POST request
      fetch("https://tutor-pipecat.fly.dev/notify-scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: currentUrl,
        }),
      }).catch((error) => console.error("Error:", error));
    }
  }, []);

  return null; // This component doesn't render anything
}
