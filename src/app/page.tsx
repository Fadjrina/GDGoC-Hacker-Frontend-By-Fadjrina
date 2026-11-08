"use client";

import { useState, useEffect } from "react";

const API = "https://gdgoc-ugm-api.vercel.app/api";

interface Track {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon?: string;
  color?: string;
  skills?: string[];
  explore_link: string;
}

interface Faq {
  id?: string;
  question: string;
  answer: string;
}

async function getData<T>(path: string): Promise<T[]> {
  const res = await fetch(`${API}/${path}`);
  if (!res.ok) throw new Error(`Gagal mengambil data /${path}`);
  const json = await res.json();
  return json.data ?? json ?? [];
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 lg:px-12 ${className}`}>{children}</div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[10px]">
      <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#4284F4]" />
      <p className="text-[12px] font-medium uppercase leading-none tracking-[0.04em] text-[#5F6368]">
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const [t, q] = await Promise.all([getData<Track>("tracks"), getData<Faq>("faqs")]);

        setTracks(t);
        setFaqs(q);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan saat memuat data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="w-full text-[#000000]">
      {/* WELCOME TO THE COMMUNITY */}
      <Container className="pt-10 pb-0">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>GDGOC UGM • 2026/2027</Eyebrow>

            <h1 className="text-[40px] font-bold leading-[105%] tracking-[-0.03em] sm:text-[56px] lg:text-[72px]">
              <span className="block text-[#242424]">Big ideas.</span>
              <span className="block text-[#1967D2]">Built together.</span>
            </h1>

            <p className="max-w-[520px] text-[16px] leading-[1.6] text-[#5F6368]">
              A place for curious minds at{" "}
              <strong className="font-bold text-[#171717]">Universitas Gadjah Mada</strong> to
              learn, connect, and build technology that matters.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-xl bg-[#4284F4] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1A73E8]">
                Find your learning track →
              </button>
              <button className="rounded-xl border border-[#DADCE0] px-6 py-3 text-sm font-medium text-[#4284F4] transition hover:bg-gray-50">
                Get to know us →
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <img src="/img2.png" alt="Community colors" className="h-4 w-auto shrink-0" />
              <p className="text-[14px] leading-none text-[#5F6368]">
                Different backgrounds. A shared curiosity.
              </p>
            </div>
          </div>

          <div className="w-full">
            <img src="/img1.png" alt="Ideas Coming Together" className="block h-auto w-full" />
          </div>
        </div>
      </Container>

      <div className="border-y -mt-15 lg:-mt-25 border-[#E0E0E0]">
        <Container className="flex flex-col items-start justify-between gap-4 py-5 text-sm text-[#242424] sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <i className="inline-block h-2 w-2 bg-[#4284F4]" /> Learn by doing
          </span>
          <span className="flex items-center gap-2">
            <i className="inline-block h-2 w-2 bg-[#EA4335]" /> Connect across disciplines
          </span>
          <span className="flex items-center gap-2">
            <i className="inline-block h-2 w-2 bg-[#34A853]" /> Build with purpose
          </span>
        </Container>
      </div>

      {/* DISCOVER LEARNING */}
      <Container className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-2 lg:gap-12">
        {/* Introduction Heading */}
        <div className="space-y-4">
          <Eyebrow>A campus. A community.</Eyebrow>
          <h2 className="text-[32px] font-bold text-[#242424] leading-[110%] tracking-[-0.02em] sm:text-[44px]">
            Not just learning tech.
            <br />
            Finding your people.
          </h2>
          <a href="#" className="inline-block text-sm font-medium text-[#1967D2] hover:underline">
            More about GDGoC UGM →
          </a>
        </div>
        {/* Introduction Story */}
        <div className="space-y-5 text-[15px] leading-[1.7] text-[#5F6368]">
          <p>
            Google Developer Groups on Campus, Universitas Gadjah Mada brings students together
            around one simple idea: we can go <strong>further</strong> when we{" "}
            <strong>learn</strong> with each other.
          </p>
          <p>
            From your first line of code to your next product idea, there’s room to ask questions,
            share what you know, and try something new.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Student-led", "Peer-powered", "Curiosity-first"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-[#F1F3F4] px-3 py-1 text-xs font-bold text-[#5F6368]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* TRACK DISCOVERY */}
      <Container className="pb-20">
        <div className="space-y-4">
          <Eyebrow>Find your starting point</Eyebrow>
          <h2 className="max-w-[560px] text-[32px] font-bold text-[#242424] leading-[110%] tracking-[-0.02em] sm:text-[44px]">
            Many interests. One shared journey.
          </h2>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <p className="text-[15px] text-[#5F6368]">
              Follow what excites you. Explore a track, then connect the dots with others.
            </p>
            <a href="#" className="text-sm font-medium text-[#1967D2] hover:underline">
              See the overview →
            </a>
          </div>
        </div>

        <div className="mt-8">
          {loading && (
            <div className="flex flex-col items-center justify-center space-y-3 py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-[#4284F4]" />
              <p className="text-sm text-gray-500">Memuat data track...</p>
            </div>
          )}

          {error && !loading && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-red-700">
              <p className="font-semibold">Oops! Gagal memuat data.</p>
              <p className="mt-1 text-sm">{error}</p>
            </div>
          )}

          {!loading && !error && tracks.length === 0 && (
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
              Belum ada track yang tersedia.
            </div>
          )}

          {!loading && !error && tracks.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {tracks.map((track) => (
                <article
                  key={track.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#E0E0E0] bg-white"
                >
                  <div
                    className="flex h-[150px] w-full items-center justify-center p-6 text-4xl"
                    style={{ backgroundColor: `${track.color || "#4284F4"}1F` }}
                  >
                    <span>{track.icon || "💻"}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.04em] text-[#1A73E8]">
                      {track.tagline}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{track.name}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-[1.6] text-[#5F6368]">
                      {track.description}
                    </p>
                    <div className="mt-auto border-t border-[#E8EAED] pt-4">
                      {track.skills && track.skills.length > 0 && (
                        <p className="mb-3 text-[11px] text-[#5F6368]">
                          {track.skills.join(" · ")}
                        </p>
                      )}
                      <a
                        href={track.explore_link || "#"}
                        className="text-sm font-medium text-[#1A73E8] hover:underline"
                      >
                        Explore this track →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>

      {/* LEARNING FORMATS */}
      <section className="bg-[#F1F3F4] py-16">
        <Container className="space-y-8">
          <div className="space-y-4">
            <Eyebrow>More than a classroom</Eyebrow>
            <h2 className="text-[32px] font-bold text-[#242424] leading-[110%] tracking-[-0.02em] sm:text-[44px]">
              Less watching. More making.
            </h2>
            <p className="text-[15px] text-[#5F6368]">
              Learn in a way that turns a new concept into something you can actually use.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                t: "Study together",
                d: "Work through foundations in peer learning sessions. Bring your questions; leave with a next step.",
                l: "Study groups & guided practice",
                img: "/icon1.png",
                alt: "study-together",
              },
              {
                t: "Try it hands-on",
                d: "Explore a tool or technique in a workshop, then put it to work in a small experiment.",
                l: "Workshops & technical sessions",
                img: "/icon2.png",
                alt: "hands-on",
              },
              {
                t: "Share the process",
                d: "Exchange feedback, explain your decisions, and learn from different ways of thinking.",
                l: "Project circles & sharing sessions",
                img: "/icon3.png",
                alt: "share-the-process",
              },
            ].map((c) => (
              <div key={c.t} className="flex flex-col rounded-2xl bg-white p-6">
                <img  src={c.img}   alt={c.alt}  className="h-6 w-6" />
                <h3 className="mt-3 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-[#5F6368]">{c.d}</p>
                <p className="mt-6 border-t border-[#DADCE0] pt-4 text-xs font-medium text-[#1967D2]">
                  {c.l}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BUILD AND BELONGING */}
      <Container className="grid grid-cols-1 items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <div className="rounded-3xl bg-[#FEF3D8] p-6">
          <div className="mb-4 ml-3 mt-2 flex justify-between">
            <span className="text-[#5F6368] text-[10px]">IDEA -> PROTOTYPE</span>
            <span className="text-[#1967D2] text-[15px]">{"< / >"}</span>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex gap-1.5">
              <i className="h-1.5 w-1.5 rounded-full bg-[#EA4335]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#F9AB00]" />
              <i className="h-1.5 w-1.5 rounded-full bg-[#34A853]" />
            </div>
            <p className="text-2xl font-bold leading-tight">
              A little less friction.
              <br />A better campus day.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2 text-xs font-bold">
              <span className="rounded-md bg-[#EAF2FF] px-3 py-2.5">Discover</span>
              <span className="rounded-md bg-[#EAF5ED] px-3 py-2.5">Connect</span>
              <span className="rounded-md bg-[#FDEDEA] px-3 py-2.5">Share</span>
            </div>
            <p className="mt-5 text-[11px] text-[#5F6368]">
              Start with a student need. Build a small, useful solution.
            </p>
          </div>
          <p className="mt-4 text-[10px] uppercase text-[#5F6368]">
            EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
          </p>
        </div>

        <div className="space-y-5">
          <Eyebrow>Build something that matters</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[110%] tracking-[-0.02em] sm:text-[44px]">
            Your next project could start on campus.
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#5F6368]">
            What if finding a study partner, sharing resources, or navigating campus felt easier?
            Small, familiar problems can be the beginning of meaningful work.
          </p>
          <p className="text-[15px] leading-[1.7] text-[#5F6368]">
            Bring research, design, and development together. Try an idea, get feedback, and make
            the next version better.
          </p>
          <a href="#" className="inline-block text-sm font-medium text-[#1967D2] hover:underline">
            Explore project-based learning →
          </a>
        </div>
      </Container>

      {/*GETTING STARTED*/}
      <Container className="pb-20">
        <div className="space-y-4">
          <Eyebrow>Make your first move</Eyebrow>
          <h2 className="max-w-[550px] text-[32px] font-bold leading-[110%] tracking-[-0.02em] sm:text-[44px]">
            You don’t need to have it all figured out.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Follow your curiosity",
              d: "Explore the tracks and find a topic you want to understand better.",
            },
            {
              n: "02",
              t: "Learn alongside others",
              d: "Join a learning opportunity, ask a question, and share your perspective.",
            },
            {
              n: "03",
              t: "Turn learning into action",
              d: "Practice through a project, exchange feedback, and pass something on.",
            },
          ].map((s) => (
            <div key={s.n}>
              <p className="text-[40px] font-bold leading-none text-[#1A73E8]">{s.n}</p>
              <div className="mt-4 border-t border-[#E0E0E0] pt-4">
                <h3 className="text-lg font-bold">{s.t}</h3>
                <p className="mt-1 text-sm leading-[1.6] text-[#5F6368]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* BELONGING STATEMENT */}
      <section className="bg-[#EAF5ED] py-10">
        <Container className="flex items-start gap-6">
          <img src="/spark.png" alt="spark" />
          <div>
            <h2 className="text-[26px] font-bold leading-[120%] tracking-[-0.01em] sm:text-[32px]">
              Different majors. Different starting points.
              <br />A place for all of them.
            </h2>
            <p className="mt-2 text-sm text-[#5F6368]">
              You don’t have to be the most experienced person in the room. Curiosity, kindness, and
              a willingness to learn are a good place to start.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <Container className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-4">
          <Eyebrow>A few good questions</Eyebrow>
          <h2 className="text-[32px] font-bold leading-[110%] tracking-[-0.02em] sm:text-[44px]">
            Wondering <br /> where <br /> to begin?
          </h2>
          <a href="#" className="inline-block text-sm font-medium text-[#1A73E8] hover:underline">
            Ask us a question →
          </a>
        </div>
        <div>
          {faqs.map((f, idx) => (
            <details
              key={f.id || f.question || idx}
              className="group border-b border-[#E0E0E0] py-5 first:pt-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold">
                {f.question}
                <span className="text-[#1967D2] transition group-open:rotate-180">v</span>
              </summary>
              <p className="mt-2 text-sm leading-[1.6] text-[#5F6368]">{f.answer}</p>
            </details>
          ))}
        </div>
      </Container>

      {/* ===== CTA ===== */}
      <Container className="pb-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#EAF2FF] p-8 md:flex-row md:items-center md:p-10">
          <div className="space-y-3">
            <Eyebrow>Your next chapter</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[115%] tracking-[-0.02em] sm:text-[38px]">
              Bring your curiosity.
              <br />
              We’ll build from there.
            </h2>
            <p className="text-sm text-[#5F6368]">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-start">
            <button className="rounded-lg bg-[#4284F4] px-5 py-2.5 text-sm font-medium  text-white transition hover:bg-[#1558B0]">
              Explore the overview →
            </button>
            <a href="#" className="text-sm font-medium text-[#1967D2] hover:underline">
              Talk to the community →
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
