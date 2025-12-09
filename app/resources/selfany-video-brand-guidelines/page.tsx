"use client";

import { Container } from "@/components/Container/Container";
import Image from "next/image";

const toneDos = [
  "Sound confident, assured, and informed.",
  "Use simple but powerful statements.",
  "Add light wit where appropriate (smart, not silly).",
  "Maintain a professional but human tone.",
  "Speak with clarity and energy; Selfany is fast and innovative.",
  "Use short, punchy lines.",
];

const toneDonts = [
  "Avoid sounding corporate or robotic.",
  "Skip slang that weakens professionalism.",
  "Don’t shout; deliver with authority, not aggression.",
  "Don’t ramble — keep messages sharp and direct.",
];

const emotionalStatements = [
  "“I’ve been missing out.”",
  "“This brand is premium, fast, and global.”",
  "“They understand creators like me.”",
];

const colorGuides = [
  {
    title: "Wardrobe",
    icon: "/images/brand.png",
    bullets: [
      "Wear blue, white, black, or grey.",
      "Avoid distracting patterns and loud colours.",
      "Keep accessories clean and intentional.",
    ],
  },
  {
    title: "Background",
    icon: "/images/landing-page-3.png",
    bullets: [
      "Use a clean white canvas.",
      "Keep setups minimalist to reflect modern fintech.",
      "Add Afrocentric elements only when subtle and relevant.",
    ],
  },
  {
    title: "Lighting",
    icon: "/images/landing-page-5.png",
    bullets: [
      "Bright, crisp, white-balanced lighting.",
      "Avoid yellow, dim, or colour-shifting lights.",
      "Aim for a Revolut-level of trust on screen.",
    ],
  },
];

const framingHighlights = [
  {
    title: "Recommended",
    bullets: [
      "Medium shot (chest up) or close-up POV.",
      "Rule-of-thirds framing with breathing room.",
      "Sharp, stable visuals with subtle, modern motion.",
    ],
  },
  {
    title: "Avoid",
    bullets: [
      "Busy or cluttered backgrounds.",
      "Shaky, low-quality footage or audio.",
      "Over-saturated filters or inconsistent colour grading.",
    ],
  },
];

const implicationList = [
  {
    title: "Loss of Brand Consistency",
    description:
      "Off-brand visuals weaken recognition and dilute the premium, globally trusted identity.",
  },
  {
    title: "Reduced Viewer Impact",
    description:
      "The emotional punch—missing out, premium speed, creator empathy—disappears when tone or visuals slip.",
  },
  {
    title: "Higher Chances of Rejection",
    description:
      "Misaligned content may be rejected, delaying campaigns and wasting resources on reshoots.",
  },
  {
    title: "Negative Reflection on the Creator",
    description:
      "Creators look inconsistent when brand rules are ignored. Selfany content should elevate your personal brand.",
  },
  {
    title: "Weakened Public Perception",
    description:
      "Every video shapes Selfany’s reputation. Poor audio, colours, or setups make the brand look less reliable.",
  },
];

const galleryImages = [
  {
    src: "/images/landing-page-1.png",
    alt: "Confident on-camera creator",
    caption: "Confident tone, witty punchlines, sharp delivery.",
  },
  {
    src: "/images/landing-page-6.png",
    alt: "Minimal set design",
    caption: "Minimal fintech-ready set with crisp lighting.",
  },
  {
    src: "/images/landing-page-4.png",
    alt: "Premium close-up frame",
    caption: "Close-up framing that keeps energy focused.",
  },
];

export default function SelfanyVideoBrandGuidelines() {
  return (
    <div className="relative w-full bg-[#eff3ff] py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#1d4bff] blur-[160px]" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[#ffb800] blur-[120px]" />
      </div>

      <Container className="px-5 md:px-10">
        <section className="grid gap-10 rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(13,54,148,0.12)] md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#e6ecff] px-4 py-1 text-sm font-medium uppercase tracking-[0.2em] text-[#1d4bff]">
              the selfany way
              <span className="h-2 w-2 rounded-full bg-[#ffb800]" />
            </p>
            <h1 className="text-3xl font-semibold text-[#0f1b3d] sm:text-4xl lg:text-5xl">
              Selfany – Video Content Brand Guidelines
            </h1>
            <p className="text-lg text-[#3c4670] lg:text-xl">
              A bold, modern brochure for every creator and partner. Follow this
              playbook to keep Selfany premium, fast, witty, and nurturing on
              every screen.
            </p>

            <div className="grid gap-5 sm:grid-cols-3">
              {emotionalStatements.map((statement) => (
                <div
                  key={statement}
                  className="rounded-2xl border border-[#eef0ff] bg-[#f8faff] p-4 text-sm font-medium text-[#192552]"
                >
                  {statement}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] bg-[#0e31f2] p-8 text-white shadow-[0_30px_80px_rgba(14,49,242,0.35)]">
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src="/rocket.png"
                  alt="Selfany speed icon"
                  width={80}
                  height={80}
                  className="rounded-2xl bg-white/10 p-3"
                />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#eed15c]">
                    premium motion
                  </p>
                  <p className="text-2xl font-semibold">Bold + Modern + Human</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-white/80">
                Before you hit record, run through these pillars: tone, colour,
                framing, and consistency. Every frame must scream precision,
                trust, and creator empathy.
              </p>
              <div className="mt-8 rounded-[24px] bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#eed15c]">
                  signature look
                </p>
                <p className="text-lg font-semibold">White + Blue + Touch of Yellow</p>
                <p className="text-sm text-white/70">
                  Keep wardrobes, sets, and lighting within this palette for instant brand recall.
                </p>
              </div>
            </div>
            <Image
              src="/images/landing-page-2.png"
              alt="Selfany creator collage"
              width={420}
              height={420}
              className="absolute -bottom-10 left-1/2 hidden w-60 -translate-x-1/2 rounded-3xl border-4 border-white shadow-xl md:block"
            />
          </div>
        </section>

        <section className="mt-16 rounded-[32px] bg-[#0f1b3d] p-8 text-white shadow-[0_20px_70px_rgba(2,10,44,0.5)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#6dd0ff]">
                1. Video Tone & Delivery
              </p>
              <h2 className="text-3xl font-semibold">
                Bold + Professional + Witty + Modern + Nurturing
              </h2>
            </div>
            <Image
              src="/globe.svg"
              alt="Global icon"
              width={120}
              height={120}
              className="md:w-28"
            />
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-[#6dd0ff]">
                Do
              </p>
              <ul className="mt-4 space-y-3 text-base text-white/90">
                {toneDos.map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#6dd0ff]" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[#142453] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#ffb800]">
                Don’t
              </p>
              <ul className="mt-4 space-y-3 text-base text-white/90">
                {toneDonts.map((tip) => (
                  <li key={tip} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#ffb800]" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-[0_15px_60px_rgba(15,27,61,0.12)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#1d4bff]">
              2. Brand Colours on Camera
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0f1b3d]">
              White + Blue + a Touch of Yellow
            </h2>
            <p className="mt-4 text-base text-[#51608c]">
              Align outfits, sets, and lighting to keep the Selfany palette recognizable in every frame.
            </p>

            <div className="mt-8 grid gap-6">
              {colorGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="flex gap-5 rounded-3xl border border-[#eef0ff] p-5"
                >
                  <Image
                    src={guide.icon}
                    alt={guide.title}
                    width={72}
                    height={72}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#0f1b3d]">
                      {guide.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm text-[#4b5d8a]">
                      {guide.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1d4bff]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-gradient-to-b from-[#10225d] to-[#030b2e] p-8 text-white shadow-[0_15px_60px_rgba(3,11,46,0.6)]">
            <p className="text-sm uppercase tracking-[0.3em] text-[#6dd0ff]">
              On-set inspiration
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Visual Moodboard</h2>
            <p className="mt-4 text-base text-white/70">
              Use these image cues to spark set ideas that feel premium, fast, and global.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {galleryImages.map((photo) => (
                <div
                  key={photo.caption}
                  className="rounded-3xl bg-white/5 p-3 backdrop-blur"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={320}
                    height={240}
                    className="h-32 w-full rounded-2xl object-cover"
                  />
                  <p className="mt-3 text-sm text-white/80">{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[32px] bg-white p-8 shadow-[0_15px_60px_rgba(15,27,61,0.12)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#1d4bff]">
                3. Framing & Composition
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[#0f1b3d]">
                Premium composition for fintech storytelling
              </h2>
            </div>
            <Image
              src="/images/heroServiceImage.png"
              alt="Camera framing"
              width={240}
              height={240}
              className="w-32 lg:w-40"
            />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {framingHighlights.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-[#eef0ff] p-6"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-[#1d4bff]">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-3 text-base text-[#42507a]">
                  {group.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#ffb800]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[32px] bg-[#050c2b] p-8 text-white shadow-[0_20px_70px_rgba(2,10,44,0.55)]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#ffb800]">
            4. Implication of Not Following the Guides
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            What’s at stake when brand rules break
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {implicationList.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[32px] bg-white p-8 text-[#0f1b3d] shadow-[0_15px_60px_rgba(15,27,61,0.12)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#1d4bff]">
                Final commitment
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                “I have read, understood, and will adhere to Selfany’s brand guide.”
              </h2>
            </div>
            <Image
              src="/images/landing-page.png"
              alt="Selfany signature"
              width={220}
              height={220}
              className="w-36 lg:w-48"
            />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#7a86b2]">
              Your Name
              <span className="rounded-2xl border border-dashed border-[#cfd5f0] px-4 py-3 text-lg text-[#0f1b3d]">
                ________________________________
              </span>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[#7a86b2]">
              Date
              <span className="rounded-2xl border border-dashed border-[#cfd5f0] px-4 py-3 text-lg text-[#0f1b3d]">
                ________________________________
              </span>
            </label>
          </div>
        </section>
      </Container>
    </div>
  );
}
