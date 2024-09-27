import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e2530] p-4 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-md mb-4">
          We use cookies and other tracking technologies to improve your
          browsing experience on our website, to show you personalized content
          and targeted ads, to analyze our website traffic, and to understand
          where our visitors are coming from.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsVisible(false)}
            className="rounded bg-[#00a86b] px-4 py-2 text-white transition-colors hover:bg-[#008c59]"
          >
            I Agree
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="rounded bg-[#4a5568] px-4 py-2 text-white transition-colors hover:bg-[#2d3748]"
          >
            I Decline
          </button>
        </div>
        <div className="mt-2 text-center">
          <button
            onClick={() => {
              /* Implement preference change logic */
            }}
            className="text-xs text-[#a0aec0] hover:underline"
          >
            Change my preferences
          </button>
        </div>
      </div>
    </Card>
  );
}
