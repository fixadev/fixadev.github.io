import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/mobile-tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-y-auto"
      style={{
        background:
          "linear-gradient(135deg, #eb5765 -3%, #5a70dc 50%, #27b246 103%)",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/assets/noise.png)",
          backgroundRepeat: "repeat",
        }}
      />

      <main className="relative max-w-[1000px] mx-auto px-4 pt-12 md:pt-20 flex flex-col justify-between min-h-screen text-white">
        <div className="flex flex-col items-center gap-6 flex-1 justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
              Meet your personal <br className="md:hidden" />
              AI tutor
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Mimi can{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted cursor-pointer">
                    talk
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={5}
                    className="p-2 text-sm text-white bg-white/10 backdrop-blur-lg border border-white/20"
                  >
                    Mimi interacts with you via voice
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              ,{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted cursor-pointer">
                    see
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={5}
                    className="p-2 text-sm text-white bg-white/10 backdrop-blur-lg border border-white/20"
                  >
                    Mimi sees what&apos;s on your screen to give personalized
                    advice
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              ,{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted cursor-pointer">
                    write
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={5}
                    className="p-2 text-sm text-white bg-white/10 backdrop-blur-lg border border-white/20"
                  >
                    Mimi writes text and math equations directly to your screen
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              and{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted cursor-pointer">
                    flirt
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={5}
                    className="p-2 text-sm text-white bg-white/10 backdrop-blur-lg border border-white/20"
                  >
                    Mimi spices up your learning with some flirty banter 😏
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              😏
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/app_logo.jpg"
              alt="Massive Brain App Icon"
              width={180}
              height={180}
              className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-[28px] md:rounded-[36px] my-8 shadow-lg"
              style={{
                animation: "float 6s ease-in-out infinite",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
              }}
            />

            <a
              target="_blank"
              href="https://apple.co/43h0aub"
              className="block w-[240px] transition-opacity hover:opacity-80"
            >
              <Image
                src="/assets/download_on_app_store_black.svg"
                alt="Download on the App Store"
                width={240}
                height={80}
              />
            </a>

            <a
              target="_blank"
              href="https://x.com/jonathanzliu/status/1895601693884367080"
              className="relative w-[240px] transition-all mt-3 mb-3 no-underline px-6 py-4 rounded-2xl font-medium text-lg text-center bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-lg flex items-center justify-center gap-2.5 hover:bg-white/15 hover:border-white/30"
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
            </a>

            <div className="text-sm opacity-90 mb-8">exclusively for iPad.</div>
          </div>
        </div>

        <div className="flex gap-8 justify-center py-6">
          <Link
            target="_blank"
            href="/privacy"
            className="font-medium opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Privacy
          </Link>
          <a
            target="_blank"
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="font-medium opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Terms
          </a>
          <a
            target="_blank"
            href="https://forms.gle/wZkzNN8s5NPmgavM6"
            className="font-medium opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Support
          </a>
        </div>
      </main>
    </div>
  );
}
