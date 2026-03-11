# Landing Page Generation Prompt — PracticePapers.io

---

## BRIEF FOR LLM

You are a world-class product designer and conversion copywriter who has worked with Notion, Linear, Vercel, and Loom. Your job is to write the complete HTML/CSS/JS for a single-page marketing website for **PracticePapers.io** — an HSC Mathematics practice platform for Year 11 and 12 students in NSW, Australia.

The design should look like it cost $50,000. Think: Arc Browser's website, Raycast's website, Linear's website. Clean. Confident. A little editorial. Not a SaaS template. Not a Tailwind starter. Something that feels curated and considered.

---

## TARGET AUDIENCE

**Primary:** Year 12 HSC students, 16–18 years old, studying Mathematics (Standard, Advanced, Extension 1, Extension 2) in NSW Australia.

**Secondary:** Their parents, who are paying for the subscription and want to see their child perform.

**Psychographic profile of the student:**
- They are 6–10 weeks out from the most important exam of their life so far
- They are comparing themselves constantly to peers — in group chats, at school, after every assessment task
- They feel behind. Even the students getting 90s feel behind.
- They've been told their ATAR determines their future and they half-believe it
- They procrastinate by doing "fake studying" — re-reading notes, watching YouTube, colour-coding summaries — and deep down they know it isn't working
- They are native to TikTok, Instagram, Notion, and Discord. They can smell inauthenticity immediately.
- They want to feel in control. Calm. Like they have a plan. Like someone is on their side.
- The emotion they want: **confidence without arrogance. Clarity without overwhelm.**

---

## FRAMEWORK: PAS → AIDA → PROOF → CTA

Structure the page using this arc:

1. **Pain** — open with the exact emotional state they're in right now
2. **Agitate** — name the specific things that aren't working and why
3. **Solution** — introduce the product as the answer, not with hype but with calm authority
4. **Demo/Features** — show, don't tell. App screenshots and feature explanations
5. **Social proof** — real-feeling testimonials from students like them
6. **Pricing** — simple, honest, no dark patterns
7. **Final CTA** — emotionally resonant, low-pressure, aspirational

---

## COPYWRITING DIRECTION

**Tone:** Calm. Direct. Like a smart older friend who got a 99 ATAR and actually wants to help you — not a tutor trying to sell you something. Sentences are short. No exclamation marks. No "🚀🔥💯". No corporate language. No "unlock your potential."

**Voice references:**
- Notion's early marketing ("A tool for thought")
- Stripe's documentation (clear, no fluff)
- The way a Year 12 student texts their friend after figuring something out: "honestly just do past papers, nothing else matters"

**Avoid:**
- "Transform your results"
- "Unlock your potential"
- "Join thousands of students"
- Any sentence that starts with "Are you struggling with..."
- Fake urgency ("Only 3 spots left!")
- Emoji in copy
- Generic stock photo energy

---

## PAGE STRUCTURE & COPY

### SECTION 1 — HERO

**Layout:** Full viewport height. Left-aligned text, right side has a browser mockup / app screenshot floating at a slight angle with a soft drop shadow. Background is off-white (#F8F7F5) or very light warm grey. A subtle grain texture overlay at 3–4% opacity.

**Eyebrow text (small caps, tracked out, muted):**
```
HSC Mathematics · NSW · 2025
```

**Headline (large, tight tracking, serif or premium sans):**
```
The night before an exam,
you should feel ready.
```

**Subheadline (medium weight, comfortable line height, zinc-500):**
```
PracticePapers.io gives you real HSC-style questions,
worked solutions, and a tool that learns where you're going wrong —
so you can fix it before it costs you marks.
```

**Primary CTA button:**
```
Start practising free
```
*(Styled: dark fill, white text, slight rounding, no border. Feels like a product button not a marketing button.)*

**Secondary link beneath:**
```
See how it works ↓
```

**Social proof line (very small, beneath CTAs):**
```
Used by students preparing for Advanced, Extension 1, and Extension 2
```

**App screenshot placeholder:**
`[SCREENSHOT: The main papers browsing page — showing subject cards and paper listings. Floating in a browser chrome mockup, slight 3D tilt, soft shadow.]`

---

### SECTION 2 — PAIN (The honest mirror)

**Layout:** Centred, constrained width (~700px), generous whitespace. This section should feel like a breath.

**Section label:**
```
sound familiar?
```

**Headline:**
```
You've done the work.
But it doesn't feel like it.
```

**Body copy (3–4 short paragraphs, each 2–3 lines):**

```
You've been to every class. You've got the notes. You've watched the
YouTube videos. But in the exam, when the question looks slightly different
from what you practised — your mind goes blank.

That's not a you problem. That's a practice problem.

Re-reading notes feels productive. It isn't. The only thing that builds
exam skill is sitting with a real question, attempting it, checking where
you went wrong, and doing it again. That's it.

The students who perform aren't smarter. They just practised differently.
```

---

### SECTION 3 — AGITATE (Name what doesn't work)

**Layout:** 3-column grid. Each column has a short label at top in rose/red-tinted muted text, then a 1-line headline, then 2–3 lines of body.

**Column 1:**
- Label: `The fake study trap`
- Headline: `Highlighting feels like learning.`
- Body: `It's not. Passive re-reading creates the illusion of understanding — until the exam asks you to actually do something.`

**Column 2:**
- Label: `The random practice problem`
- Headline: `Doing questions isn't enough.`
- Body: `Grinding random exercises doesn't tell you which topics are costing you marks. You need to practise specifically where you're weakest.`

**Column 3:**
- Label: `The last-minute panic`
- Headline: `Leaving it to trial week is too late.`
- Body: `The students who improve aren't doing more the week before. They've been doing consistent, targeted practice for months.`

---

### SECTION 4 — SOLUTION (The product reveal)

**Layout:** Dark section (zinc-900 or near-black). Light text. Feels like a mode shift on the page — from "here's your problem" to "here's what changes."

**Eyebrow:**
```
the shift
```

**Headline:**
```
Practice that actually prepares you.
```

**Body:**
```
PracticePapers.io is built around one idea: the best way to prepare
for the HSC is to do HSC-quality questions, check your answers against
worked solutions, and track exactly where you keep going wrong.

Not general study. Not passive review. Deliberate, targeted practice —
with the feedback loop that makes it stick.
```

**3 feature cards (dark cards on dark bg, subtle border, icon top-left):**

1. **Real HSC-style papers**
   - Icon: a clean document icon
   - Copy: `Past-paper-quality questions across all levels — Standard, Advanced, Extension 1, Extension 2. Formatted exactly like the real exam.`

2. **Worked solutions, step by step**
   - Icon: a branching path / steps icon
   - Copy: `Every question has a complete worked solution. Not just the answer — the method, the reasoning, and how to structure your response for full marks.`

3. **Practice by topic**
   - Icon: a crosshair / target icon
   - Copy: `Choose a topic — Integration, Probability, Vectors — and drill questions from across all papers. Focused practice, not random noise.`

---

### SECTION 5 — FEATURE DEEP DIVE (Practice by Topic)

**Layout:** Alternating left-right feature blocks. Large screenshot left, copy right. Then flips.

**Feature 1 — Topic Browser**

*Screenshot placeholder:*
`[SCREENSHOT: The /topics page showing topic groups — Calculus (indigo), Trigonometry (sky blue), Probability (amber) — with their coloured icon tiles and question counts.]`

*Copy:*
```
Every topic. Every paper. One place.

Browse by subject, then drill into any topic area — from Differentiation
to Binomial Probability. Each topic shows you exactly how many questions
are in the bank, so you know how much you can practise before you've
exhausted it.
```

**Feature 2 — Worked Solutions (hidden by default)**

*Screenshot placeholder:*
`[SCREENSHOT: A practice question card with the "Show solution" button visible, then a second state showing the solution expanded below the question — clean layout, MathJax-rendered steps.]`

*Copy:*
```
See the question first. Attempt it.
Then check your work.

Solutions are hidden until you ask for them. Because just reading the
answer teaches you nothing. The moment of checking — comparing your
reasoning to the worked solution — is where the actual learning happens.
```

**Feature 3 — Weak Areas**

*Screenshot placeholder:*
`[SCREENSHOT: The "Your weak areas" panel showing 4–5 topic cards, each with a coloured topic icon, a progress bar showing correct rate, and subject pill tags (2U, E1 etc). Visually striking, data-forward but not clinical.]`

*Copy:*
```
It knows where you keep going wrong.

After you mark your answers, PracticePapers tracks your performance
across every topic. Your weakest areas rise to the top — so your next
practice session targets exactly where you need it most.

It's not a generic revision schedule. It's your revision schedule.
```

---

### SECTION 6 — SOCIAL PROOF

**Layout:** Off-white background. Masonry or 3-column grid of testimonial cards. Cards are white, light border, no star ratings (stars feel fake), just a quote, name, and context.

**Design note:** These should feel like real screenshots of messages or real handwritten notes — not polished marketing quotes. Consider a subtle "iMessage bubble" aesthetic for one or two of them to feel native to how this generation communicates.

**Testimonials:**

```
"genuinely the most useful thing I've found for ext 2.
doing questions by topic before trials changed everything."
— Anika S., Mathematics Extension 2
```

```
"I used to just re-read my notes for hours and wonder why
I kept making the same mistakes. The weak areas feature
literally showed me what I was doing. Kind of confronting
but also exactly what I needed."
— James T., Mathematics Advanced
```

```
"the solutions are actually good. like proper worked solutions
not just 'x = 4'. i finally understand why the method works,
not just what to write."
— Priya M., Mathematics Extension 1
```

```
"my mum found this and I'm genuinely glad she did"
— Ethan R., Mathematics Standard
```

*(Note to LLM: style these authentically — lowercase where appropriate, casual phrasing, no superlatives. They should read like real students, not marketing copy.)*

---

### SECTION 7 — PRICING

**Layout:** Centred. Two cards side by side, clean, no gradients, no badge that says "MOST POPULAR!!". The recommended plan has a slightly elevated shadow and a thin coloured border.

**Section headline:**
```
Simple pricing.
No surprises.
```

**Plan 1 — Essential**
- Price: `$12 / month`
- Descriptor: `Everything you need to practise properly.`
- Features listed plainly (no checkmark emojis — use a thin check icon):
  - Unlimited access to all practice papers
  - Full worked solutions for every question
  - Practice by topic — all subjects
  - Weak areas tracking
  - Self-marking tools
- CTA: `Get started`

**Plan 2 — Smart** *(recommended)*
- Price: `$22 / month`
- Descriptor: `For students who want every advantage.`
- Everything in Essential, plus:
  - AI-powered question explanations
  - Personalised mock exam generator
  - Step-by-step AI tutor on any solution
- CTA: `Get Smart`

**Below cards:**
```
Both plans include a 7-day free trial. No credit card required to start.
Cancel any time — though most students don't want to.
```

---

### SECTION 8 — THE EMOTIONAL CLOSE

**Layout:** Full-width, dark background. Single column, centred. Generous whitespace. This is the moment before the final CTA — it should feel almost like a quiet conversation.

**Headline:**
```
You already know what you need to do.
```

**Body:**
```
More past papers. More worked examples. More targeted practice on the
topics that are costing you marks.

You've known that for a while. The question is just whether you have
the right tool to do it properly.

This is that tool.
```

**CTA Button:**
```
Start your free trial
```

**Micro-copy beneath:**
```
7 days free. Then $12/month. Cancel any time.
```

---

### SECTION 9 — FOOTER

Minimal. Logo left. Links centre (Papers, Practice by Topic, Pricing, Sign In). Copyright and legal right.

---

## VISUAL DESIGN SYSTEM

**Typography:**
- Headlines: A premium serif (Playfair Display, Lora, or GT Super) OR a confident geometric sans (Söhne, Inter at tight tracking). Not both. Pick one direction and commit.
- Body: Inter or DM Sans, 15–16px, comfortable line height (1.65)
- Labels/eyebrows: All caps, tracked out at 0.12em, zinc-400, 11px

**Colour palette:**
- Background: `#F8F7F5` (warm off-white, not pure white)
- Dark section: `#18181B` (zinc-900)
- Text primary: `#09090B` (zinc-950)
- Text secondary: `#71717A` (zinc-500)
- Accent (CTA, highlights): `#18181B` dark fill — keep it monochromatic, let the screenshots provide colour
- Danger/weakness accent: `#E8543A` (terracotta — used sparingly)

**Spacing:** Generous. Sections have 120–160px vertical padding. Nothing feels cramped.

**Motion:**
- Subtle fade-up on scroll for section entries (IntersectionObserver, no heavy libraries)
- The app screenshots have a gentle parallax on scroll
- The hero screenshot floats with a slow, looping subtle animation (translateY 0px → -8px → 0px, 4s ease-in-out infinite)
- No auto-playing carousels. No pop-ups. No cookie banners blocking content.

**Screenshot treatment:**
- All app screenshots sit inside a minimal browser chrome (just the top bar with three circles + URL bar)
- Subtle box-shadow: `0 24px 80px -12px rgba(0,0,0,0.18)`
- Slight rotation on hero (e.g. `rotate(-1.5deg)`) to feel natural, not templated
- On mobile: screenshots stack below copy, full width, no rotation

**No stock photos.** Ever. If human faces are needed, use abstract geometric avatars or leave them out. The product screenshots are the visual proof.

---

## TECHNICAL REQUIREMENTS

- Single HTML file with embedded CSS and minimal vanilla JS (no React, no framework)
- Fully responsive — mobile-first
- Semantic HTML5
- Smooth scroll behaviour
- All `[SCREENSHOT: ...]` placeholders rendered as styled placeholder boxes with the description shown inside, ready to swap for real images
- Placeholder boxes should be the correct aspect ratio for the described screenshot
- Performance: no external font requests that block render (preconnect + preload), no blocking scripts
- No cookie banners, no chat widgets, no popups

---

## FINAL INSTRUCTION TO LLM

Write the complete, production-ready HTML for this page. Every section. Every word of copy. Every style. Inline all CSS. Use real placeholder boxes for screenshots with the correct dimensions and descriptive labels. The page should be able to open in a browser right now and look like a premium product.

Do not simplify. Do not skip sections. Do not use generic filler copy. Write it as if this page is being reviewed by the founders tomorrow morning.
