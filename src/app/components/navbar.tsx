"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const API = "https://gdgoc-ugm-api.vercel.app/api";

interface NavItem {
  label: string;
  href: string;
}

// Dipakai selama API belum selesai dimuat, atau kalau API gagal
const FALLBACK_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Overview", href: "/overview" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [items, setItems] = useState<NavItem[]>(FALLBACK_NAV);

  useEffect(() => {
    fetch(`${API}/navigation`)
      .then((r) => r.json())
      .then((json) => {
        const raw = json.data ?? json;
        if (!Array.isArray(raw)) return;
        // Terima beberapa kemungkinan nama field dari API
        const list: NavItem[] = raw
          .map((i) => ({
            label: i.label ?? i.name ?? i.title ?? "",
            href: i.href ?? i.path ?? i.url ?? i.link ?? "#",
          }))
          .filter((i) => i.label);
        if (list.length) setItems(list);
      })
      .catch(() => {});
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E0E0E0] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
        {/* LOGO: ganti blok teks ini dengan <img src="/logo.png" alt="GDGoC UGM" className="h-9 w-auto" /> */}
        <Link href="/" className="leading-tight">
          <p className="text-[17px] font-medium text-[#171717]">Google Developer Groups</p>
          <p className="text-[11px] text-[#5F6368]">
            <span className="text-[#1A73E8]">On Campus</span> • Universitas Gadjah Mada
          </p>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active ? "bg-[#E8F0FE] font-medium text-[#1A73E8]" : "text-[#5F6368] hover:text-[#171717]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/overview"
          className="rounded-xl bg-[#1A73E8] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1558B0]"
        >
          Find your track →
        </Link>
      </div>
    </header>
  );
}