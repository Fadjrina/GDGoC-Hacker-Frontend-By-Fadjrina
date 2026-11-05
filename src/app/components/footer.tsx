import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-[#F1F3F4]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-6 pt-12 md:grid-cols-[2fr_1fr_1fr] lg:px-12">
        <div className="space-y-3">
          <img src="/logo.png" alt="GDGoC UGM" className="h-7 w-auto" />
          <p className="max-w-[300px] text-sm text-[#5F6368]">
            A student community for curious minds, shared learning, and technology with purpose.
          </p>
        </div>

        <div className="space-y-2 text-sm text-[#5F6368]">
          <p className="font-semibold text-[#000000]">Explore</p>
          <Link href="/" className="block hover:text-[#171717]">
            Home
          </Link>
          <Link href="/about" className="block hover:text-[#171717]">
            About
          </Link>
          <Link href="/overview" className="block hover:text-[#171717]">
            Overview
          </Link>
          <Link href="/contact" className="block hover:text-[#171717]">
            Contact
          </Link>
        </div>

        <div className="space-y-2 text-sm text-[#5F6368]">
          <p className="font-semibold text-[#171717]">Keep in the loop</p>
          <a
            href="https://instagram.com/gdgoc.ugm"
            className="block text-[#1967D2] hover:underline"
          >
            @gdgoc.ugm
          </a>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://instagram.com/gdgoc.ugm"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img src="/Instagram.png" alt="Instagram GDGoC UGM" />
            </a>
            <a
              href="https://www.youtube.com/@gdgocugm"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
            <img src="/YouTube.png" alt="YouTube GDGoC UGM" />
            </a>
          </div>
          <p className="pt-2 text-xs">Learn together. Build together.</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-12 my-4">
        <div className="border-t border-[#DADCE0]" />
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-2 px-6 pb-8 text-[11px] text-[#5F6368] sm:flex-row lg:px-12">
        <span>© GDGoC Universitas Gadjah Mada • 2026/2027</span>
        <span>Made for the campus. Open to possibilities.</span>
      </div>
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-4 px-6 pb-5 lg:px-12">
        <img src="/signature.png" alt="Brand Signature" className="w-35" />
      </div>
    </footer>
  );
}
