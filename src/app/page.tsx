import Image from "next/image";
import { FeatureTooltip } from "@/components/ui/feature-tooltip";
import { UrlNotifier } from "@/components/url-notifier";
import { AppStoreButtons } from "@/components/app-store-buttons";

const betaTesting = false;
export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-y-auto"
      style={{
        background:
          "linear-gradient(135deg, #eb5765 -3%, #5a70dc 50%, #27b246 103%)",
      }}
    >
      <UrlNotifier />
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
              It can{" "}
              <FeatureTooltip
                word="talk"
                description="Mimi interacts with you conversationally via voice"
              />
              ,{" "}
              <FeatureTooltip
                word="see"
                description="Mimi sees what's on your screen and responds based on what you're doing"
              />
              ,{" "}
              <FeatureTooltip
                word="write"
                description="Mimi writes text and math equations directly to your screen"
              />{" "}
              and{" "}
              <FeatureTooltip
                word="flirt"
                description="Mimi spices up your learning with some flirty banter 😏"
              />{" "}
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

            <AppStoreButtons betaTesting={betaTesting} />
          </div>
        </div>

        <div className="flex gap-8 justify-center py-6">
          <a
            target="_blank"
            href="/privacy"
            className="font-medium opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Privacy
          </a>
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
