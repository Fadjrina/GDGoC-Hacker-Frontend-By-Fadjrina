"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const API = "https://gdgoc-ugm-api.vercel.app/api";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [items, setItems] = useState<NavItem[]>([]);

  useEffect(() => {
    fetch(`${API}/navigation`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`API response failed with status: ${r.status}`);
        }
        return r.json();
      })
      .then((json) => {
        console.log("Data mentah dari API:", json);
        
        const raw = json.data ?? json;
        if (!Array.isArray(raw)) {
          console.warn("Format data dari API bukan array:", raw);
          return;
        }

        const list: NavItem[] = raw
          .map((i) => ({
            label: i.label ?? i.name ?? i.title ?? "",
            href: i.href ?? i.path ?? i.url ?? i.link ?? "#",
          }))
          .filter((i) => i.label);

        console.log("Data navigasi terproses:", list);
        setItems(list);
      })
      .catch((err) => {
        console.error("Gagal mengambil data dari API:", err);
      });
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DADCE0] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 lg:px-12">
        <img src="/logo.png" alt="GDGoC UGM" className="h-7 w-auto" />

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active ? "bg-[#E8F0FE] font-bold text-[#4284F4]" : "text-[#5F6368] hover:text-[#171717]"
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