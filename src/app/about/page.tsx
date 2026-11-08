"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API = "https://gdgoc-ugm-api.vercel.app/api";

interface Category {
  id: string;
  label: string;
  desc: string;
}

const ICONS = ["↗", "+", "◇", "?"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wide text-[#5F6368]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#4284F4]" />
      {children}
    </p>
  );
}

const inputClass =
  "w-full rounded-lg border border-[#DADCE0] bg-white px-4 py-3.5 text-sm text-[#242424] placeholder:text-[#80868B] outline-none focus:border-[#1A73E8]";

export default function AboutPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch(`${API}/inquiry-categories`)
      .then((r) => {
        if (!r.ok) throw new Error(`Status ${r.status}`);
        return r.json();
      })
      .then((json) => {
        const raw = json.data ?? json;
        if (!Array.isArray(raw)) return;
        const list: Category[] = raw
          .map((i, idx) => ({
            id: String(i.id ?? i.slug ?? i.value ?? idx),
            label: i.label ?? i.name ?? i.title ?? "",
            desc: i.description ?? i.desc ?? i.subtitle ?? "",
          }))
          .filter((i) => i.label);
        setCategories(list);
        if (list[0]) setSelected(list[0].id);
      })
      .catch((err) => console.error("Gagal mengambil inquiry-categories:", err));
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="pb-12 pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-[1200px] space-y-6 px-6 lg:px-12">
          <Eyebrow>About • Let&apos;s connect</Eyebrow>
          <h1 className="text-[40px] font-bold leading-[110%] tracking-[-0.02em] text-[#242424] sm:text-[64px]">
            Good things start with{" "}
            <span className="text-[#1967D2]">hello.</span>
          </h1>
          <p className="max-w-[640px] text-lg text-[#5F6368]">
            A question, a collaboration, or an idea for the community? Tell us
            what&apos;s on your mind.
          </p>
        </div>
      </section>

      {/* Topics + form */}
      <section className="pb-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 lg:grid-cols-[1fr_1.6fr] lg:px-12">
          {/* Left column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#242424]">
                What brings you here?
              </h2>
              <p className="text-sm text-[#5F6368]">
                Pick the closest topic in the form. We&apos;ll take it from
                there.
              </p>
            </div>

            <div className="space-y-4">
              {categories.map((c, idx) => {
                const active = selected === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelected(c.id)}
                    className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
                      active
                        ? "border-[#E8F0FE] bg-[#E8F0FE]"
                        : "border-[#DADCE0] bg-white hover:border-[#1A73E8]"
                    }`}
                  >
                    <span className="mt-0.5 w-5 text-center text-lg text-[#1A73E8]">
                      {ICONS[idx % ICONS.length]}
                    </span>
                    <span>
                      <span className="block text-base font-medium text-[#242424]">
                        {c.label}
                      </span>
                      <span className="mt-1 block text-sm text-[#5F6368]">
                        {c.desc}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-3 rounded-3xl bg-[#FFF7DF] p-6">
              <Eyebrow>Stay curious, stay connected</Eyebrow>
              <h3 className="text-2xl font-bold leading-tight text-[#242424]">
                Looking for community updates?
              </h3>
              <p className="text-sm leading-[1.6] text-[#5F6368]">
                Follow <b>@gdgoc.ugm</b> for learning opportunities and
                what&apos;s happening in the community.
              </p>
              <a
                href="https://instagram.com/gdgoc.ugm"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-medium text-[#1967D2]"
              >
                Find @gdgoc.ugm →
              </a>
            </div>
          </div>

          {/* Right column: form */}
          <div className="rounded-3xl bg-[#F1F3F4] p-8">
            <div className="flex items-start justify-between">
              <h2 className="text-3xl font-bold text-[#242424]">
                Send us a message
              </h2>
              <span className="text-xl text-[#1A73E8]">↗</span>
            </div>
            <p className="mt-4 text-xs text-[#5F6368]">
              Fields marked * are required.
            </p>

            <form
              className="mt-4 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-xs font-medium text-[#242424]">
                  First name *
                  <input className={inputClass} placeholder="Your first name" />
                </label>
                <label className="space-y-2 text-xs font-medium text-[#242424]">
                  Last name
                  <input className={inputClass} placeholder="Your last name" />
                </label>
              </div>

              <label className="block space-y-2 text-xs font-medium text-[#242424]">
                Email address *
                <input
                  type="email"
                  className={inputClass}
                  placeholder="Where we can reply to you"
                />
              </label>

              <label className="block space-y-2 text-xs font-medium text-[#242424]">
                University / organization
                <input
                  className={inputClass}
                  placeholder="Where you study or work (optional)"
                />
              </label>

              <label className="block space-y-2 text-xs font-medium text-[#242424]">
                Inquiry category *
                <select
                  className={inputClass}
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block space-y-2 text-xs font-medium text-[#242424]">
                Subject *
                <input
                  className={inputClass}
                  placeholder="A short introduction to your question"
                />
              </label>

              <label className="block space-y-2 text-xs font-medium text-[#242424]">
                Your message *
                <textarea
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us a little about your question or idea..."
                />
              </label>

              <label className="flex items-center gap-3 text-xs text-[#5F6368]">
                <input type="checkbox" className="h-4 w-4" />I agree that the
                information I share can be used to respond to this inquiry.
              </label>

              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  className="rounded-xl bg-[#1A73E8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1558B0]"
                >
                  Send message →
                </button>
                <p className="max-w-[200px] text-xs text-[#5F6368]">
                  Please don&apos;t include passwords or sensitive personal
                  information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Guidance */}
      <section className="border-t border-[#DADCE0] py-16">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:px-12">
          <div className="space-y-4">
            <Eyebrow>A little guidance</Eyebrow>
            <h2 className="text-[40px] font-bold leading-[110%] text-[#242424]">
              Help us understand your idea.
            </h2>
            <Link
              href="/overview"
              className="inline-block text-sm font-medium text-[#1967D2]"
            >
              Explore the programs first →
            </Link>
          </div>

          <div className="divide-y divide-[#DADCE0] border-b border-[#DADCE0]">
            {[
              {
                t: "For learning questions",
                d: "Tell us which topic interests you and where you are in your learning journey.",
              },
              {
                t: "For collaborations",
                d: "Share the idea, who it's for, and how you imagine working with the community.",
              },
              {
                t: "Not sure which category fits?",
                d: "Choose General inquiry. A clear question is always a good starting point.",
              },
            ].map((g) => (
              <div key={g.t} className="space-y-1 py-5 first:pt-0">
                <h3 className="text-lg font-bold text-[#242424]">{g.t}</h3>
                <p className="text-sm text-[#5F6368]">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}