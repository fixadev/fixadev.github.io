import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-y-auto bg-gradient-to-br from-[#eb5765] via-[#5a70dc] to-[#27b246]">
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20" />

      <main className="relative max-w-[1000px] mx-auto px-4 pt-20 flex flex-col justify-between min-h-screen">
        <div className="flex flex-col items-center gap-6 flex-1 justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4 text-white">
              Meet your personal <br className="md:hidden" />
              AI tutor
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              It can talk, see, write and flirt 😏
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/assets/app_logo.jpg"
              alt="Massive Brain App Icon"
              width={180}
              height={180}
              className="rounded-[36px] my-8 shadow-lg animate-float"
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
              className="relative w-[240px] transition-all mt-4 mb-3 no-underline px-6 py-4 rounded-2xl font-medium text-lg text-center bg-white/10 backdrop-blur-lg border-2 border-white/20 shadow-lg flex items-center justify-center gap-2.5 hover:bg-white/15 hover:border-white/30"
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

            <div className="text-sm opacity-90">exclusively for iPad.</div>
          </div>
        </div>

        <div className="flex gap-8 justify-center py-6">
          <a
            target="_blank"
            href="/privacy.html"
            className="text-white opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Privacy
          </a>
          <a
            target="_blank"
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-white opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Terms
          </a>
          <a
            target="_blank"
            href="https://forms.gle/wZkzNN8s5NPmgavM6"
            className="text-white opacity-80 hover:opacity-100 text-sm transition-opacity"
          >
            Support
          </a>
        </div>
      </main>
    </div>
  );
}
