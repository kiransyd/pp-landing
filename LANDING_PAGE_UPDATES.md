# Landing Page Update Recommendations

These are specific, actionable changes for the PracticePapers.io landing page. Each section explains what to change and why.

---

## 1. Add a dedicated Isaac section (hero-level feature)

Isaac is the AI maths tutor built into the platform. He's currently buried in a Smart plan bullet point. He deserves his own full-width feature section — equal weight to Topic Browser, Worked Solutions, and Weak Areas.

**Place it as Feature 4 in the deep-dive section**, after Weak Areas tracking.

### Section content

**Eyebrow:** "Meet Isaac"

**Headline:** "A maths tutor who's awake at 11pm the night before your exam."

**Body copy:**

> Stuck on a question? Tap "Ask Isaac" next to any solution step. He'll break it down — why the method works, what the marker looks for, where students typically slip up.
>
> Isaac isn't a chatbot that gives you the answer. He explains the reasoning behind each step, flags common HSC traps, and tells you exactly how to set out your working for full marks.
>
> And if English isn't your first language, Isaac explains in yours — Arabic, Chinese, Hindi, Vietnamese, and eight other languages.

### Isaac animation spec (right side of the feature block)

Build an animated mockup that shows Isaac in action. This should feel like a real interaction, not a static screenshot.

**Layout:** A floating chat panel (matching the actual product's design — 400px wide, warm off-white card, subtle shadow) positioned as if it's overlaying a blurred-out practice paper in the background.

**The animation plays on a loop (roughly 8–10 seconds per cycle) and shows this sequence:**

**Frame 1 — The question appears (0s–1.5s)**
A question card fades in above the chat panel, styled like the real product:
> **Question 14b** (4 marks)
> Find the exact area enclosed between the curves $y = x^2$ and $y = 4 - x^2$.

A small "Ask Isaac" button pulses gently next to it. After 1s, the button gets "clicked" (brief scale-down animation).

**Frame 2 — Isaac's panel opens (1.5s–2.5s)**
The chat panel springs in from bottom-right (scale 0.95 → 1.0, opacity 0 → 1, spring stiffness ~420, damping ~32). Isaac's face appears in the header — use an SVG recreation of his actual face:
- Warm peachy skin (#FFDAA6)
- Soft pink cheek blush (#FFBCBC)
- Dark charcoal pupils (#2D2B3D) with white catchlights
- Warm terracotta mouth (#C75A3A)
- Rounded squircle head shape

He starts in **happy** mood: big smile, pronounced cheek blush (opacity 0.35), slight excited bobbing.

**Frame 3 — User message appears (2.5s–3.5s)**
A user message bubble slides in from the right (dark zinc-900 background, white text):
> "Why do we set the two equations equal to each other first?"

A small context chip above it reads: "Q14B"

**Frame 4 — Isaac thinks (3.5s–5s)**
Isaac's face transitions to **thinking** mood:
- Head tilts left ~4°, stops bobbing
- Pupils shift up-left (looking away, pondering)
- Mouth becomes a small thoughtful pout
- Cheeks dim slightly

Three animated dots appear in a typing indicator below his face (dots scale [1, 1.4, 1] with staggered timing, opacity pulses).

**Frame 5 — Isaac responds (5s–8s)**
Isaac transitions to **talking** mood:
- Head does a gentle side-to-side bob (rotate [0, 0.8, -0.8, 0])
- Mouth opens and closes in a talking animation
- Cheeks brighten (opacity 0.28)
- Eyes blink naturally

His response types in progressively (like a real stream), appearing in a light grey bubble (zinc-100 bg):

> **Great question.** Setting $y = x^2$ equal to $y = 4 - x^2$ finds where the curves cross — those are your integration bounds.
>
> Think of it this way: you can't calculate the area *between* two curves until you know *where they meet*. The intersection points give you the limits of your definite integral.
>
> **Common HSC trap:** students forget to check which curve is on top. Here, $4 - x^2 > x^2$ between the intersection points, so it's $\int(4 - x^2 - x^2)\,dx$, not the other way around.

Key formatting details:
- Bold the words "Great question." and "Common HSC trap:"
- Render the maths expressions with proper notation (italicised variables, superscripts)
- The text should appear progressively, not all at once

**Frame 6 — Language option tease (8s–9.5s)**
Below Isaac's response, a small row of language pills fades in with a staggered animation:
`العربية` `中文` `हिन्दी` `Tiếng Việt` `한국어` `日本語`

A subtle label above them: "Explain in your language"

**Frame 7 — Reset (9.5s–10s)**
Soft fade-out of the entire panel. Brief pause. Loop restarts.

### Isaac's personality rules (for getting the tone right in any copy)

These are non-negotiable — they define how Isaac sounds everywhere on the page:

- **Warm but not cheesy.** He celebrates effort ("Great question") without being patronising ("Amazing job sweetie!"). Think: encouraging older sibling, not primary school teacher.
- **Direct.** Gets to the point. Doesn't pad with "Well, that's a really interesting question!" — just answers it.
- **Explains the why.** Never just gives the answer. Always: here's the method, here's why it works, here's what markers look for.
- **HSC-specific.** He knows the NSW syllabus, common exam traps, mark allocation, and how to set out working for full marks. He's not a generic AI — he's an HSC maths specialist.
- **Concise.** Under 200 words unless the question genuinely needs more. No waffle.
- **Flags traps.** Proactively mentions "common HSC trap" or "frequently tested concept" when relevant.
- **Never makes students feel stupid.** Treats every question as valid. No "obviously" or "simply" or "just do X".

---

## 2. Add a multi-language callout

This is a major undersold feature. NSW has one of the most linguistically diverse student populations in Australia. A maths tutor that explains in your first language is a genuine differentiator.

**Option A (preferred):** Integrate it into the Isaac section as shown above — the language pills at the end of his demo response, plus the body copy line about 12 languages.

**Option B:** Add a standalone callout strip between Isaac's section and Social Proof. Full-width, subtle background shift:

**Headline:** "Maths is hard enough without a language barrier."

**Body:** "Isaac explains any solution in Arabic, Bengali, Chinese, Farsi, Filipino, Greek, Hindi, Japanese, Korean, Tamil, Urdu, or Vietnamese. Same depth, same worked examples — in the language you think in."

**Visual:** A simple animation showing the same explanation appearing in different scripts — text morphing from English to Chinese to Arabic to Hindi, cycling through.

---

## 3. Add a "How it works" section

Currently missing. Students want to quickly understand the flow before committing. Place this between the Solution section (dark section with 3 feature cards) and the Feature Deep Dive.

**Headline:** "How it works"

**Three steps, horizontal layout:**

1. **Pick a topic or paper**
   "Choose a full practice paper or drill a specific topic — Integration, Vectors, Probability, whatever's costing you marks."

2. **Attempt questions cold**
   "No peeking. Try each question properly, then mark yourself. Solutions stay hidden until you're ready."

3. **See what's actually weak**
   "Your results feed into a tracker that shows exactly which topics you keep dropping marks on — so your next session targets what matters."

**Visual:** Simple numbered circles (1, 2, 3) with clean icons. No heavy animation needed — this section should feel fast and scannable.

---

## 4. Mention onboarding personalisation

The app has a thoughtful onboarding wizard (year level, school, subjects, study goals). This makes the product feel tailored, not generic. Work it into existing copy — doesn't need its own section.

**Suggested placement:** Add to the solution section body copy or as a line under the hero subheadline.

**Copy to weave in:**
> "Tell us your year, your subjects, and your goal — and every paper, topic, and recommendation is filtered to exactly what you need."

Or as a brief line in the hero area:
> "Set up in 30 seconds. Personalised to your subjects and year level."

---

## 5. Soften the beta scarcity

"Limited spots" for a digital product reads as artificial. Students are savvy enough to see through it.

**Current:** "Beta — limited spots" / "Be one of the first students to use it"

**Suggested replacement:**

**Eyebrow:** "Early access"

**Headline:** "Be one of the first students to use it."

**Body:**
> "We're opening PracticePapers.io to HSC students before the full launch. You'll get free access to every feature — and your feedback shapes what we build next."

**CTA:** "Join the beta — it's free"

**Micro-copy:** "No credit card. No catch."

The urgency comes from the exam timeline (HSC is coming whether they sign up or not), not from fake product scarcity.

---

## 6. Update testimonials to reference Isaac

The current testimonials are good but don't mention Isaac or language support. Consider adding or replacing one:

**Suggested new testimonial:**

> **Sarah L. — Mathematics Advanced**
> "i asked isaac to explain integration by parts in vietnamese for my mum so she'd stop asking what i'm even studying. he actually did it. properly."

This does triple duty: shows Isaac works, shows language support is real, and adds humour/authenticity.

---

## 7. Minor copy tweaks

**Hero headline A/B consideration:**
Current: "Band 6 maths students don't study more. They practise differently."
Alternative: "The night before an exam, you should feel ready."

The current one is strong but talks about other people. The alternative is more emotionally direct — it's about *you*. Worth testing both.

**Social proof headline:**
Current: "From students who were exactly where you are"
This is good. Keep it.

---

## Summary of changes (priority order)

| Priority | Change | Effort |
|----------|--------|--------|
| 1 | Add Isaac feature section with animated demo | High |
| 2 | Add multi-language callout (in Isaac section) | Low |
| 3 | Add "How it works" 3-step section | Medium |
| 4 | Add onboarding personalisation line | Low |
| 5 | Soften beta scarcity language | Low |
| 6 | Add Isaac-referencing testimonial | Low |
| 7 | Consider hero headline A/B | Low |
