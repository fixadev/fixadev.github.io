"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";

interface AppStoreButtonsProps {
  betaTesting: boolean;
}

export function AppStoreButtons({ betaTesting }: AppStoreButtonsProps) {
  const posthog = usePostHog();

  function handleAppStoreLinkClick() {
    console.log("App Store link clicked");
    posthog.capture("app_store_link_clicked");
  }

  function handleWatchVideoLinkClick() {
    console.log("Watch video link clicked");
    posthog.capture("watch_video_link_clicked");
  }

  return (
    <div className="flex flex-col items-center">
      {betaTesting ? (
        <>
          <Button href="https://forms.gle/E64mowQSRkgbGDrj6">
            Join beta test
          </Button>
          <Button
            variant="dark"
            href="https://x.com/jonathanzliu/status/1895601693884367080"
            onClick={handleWatchVideoLinkClick}
            className="my-2"
          >
            <span>Watch video on</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Button>
        </>
      ) : (
        <>
          <a
            target="_blank"
            href="https://apple.co/43h0aub"
            className="block w-[240px] transition-opacity hover:opacity-80 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            onClick={handleAppStoreLinkClick}
          >
            <Image
              src="/assets/download_on_app_store_black.svg"
              alt="Download on the App Store"
              width={240}
              height={80}
            />
          </a>

          <Button
            href="https://x.com/jonathanzliu/status/1895601693884367080"
            className="my-2"
            onClick={handleWatchVideoLinkClick}
          >
            <span>Watch video on</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Button>

          <div className="text-sm opacity-90 mb-8">exclusively for iPad.</div>
        </>
      )}
    </div>
  );
}
