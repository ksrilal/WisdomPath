# WisdomPath

Bilingual Sinhala / English learning website built with Next.js, React, and TypeScript. GitHub is the source of truth; Vercel builds directly from this repository.

## Learning structure

- 15 distinct preparatory-quality lessons from Karaṇīya Mettā Sutta, verses 1–3a.
- The supplied presentation groups these as cognitive (1–3), reflective (4–8), and compassionate (9–15). This grouping is interpretive, not a formal canonical division.
- 7 additional lessons cover verses 3b–10: wishing wellbeing, all beings, non-deception/non-harm, protective care, all directions, everyday recollection, and the closing teaching.
- Each lesson has a bilingual explanation, scenario, daily exercise, reflection prompt, flashcards, completion/bookmark controls, and a source-verse link.
- The complete map shows each of the 15 qualities separately, followed by the practice branch.
- 66 flashcards, six guided practice steps, optional timer, private browser-local journal, light/dark themes.

## Texts and attribution

The correct references are **Sutta Nipāta 1.8 (Snp 1.8)** and **Khuddakapāṭha 9 (Khp 9)**, not Saṃyutta Nikāya 1.8.

- English published translation: Mahamevnawa Buddhist Monastery, https://mahamevnawa.org/portfolio-items/karaniyametta-sutta/
- Same English text and individual-sutta sharing permission: https://suttafriends.org/sutta/khp9/ and https://suttafriends.org/copyright/
- Sinhala published translation: https://www.tripitaka.online/sutta/12604 (source verse numbers 143–152). The Sinhala reader defaults to an embedded publisher page, retaining original wording and attribution; an external link remains available.
- The separate Sinhala study view contains Sinhala-script Pāli and word meanings transcribed/arranged from the user-supplied KMS pages. These are explicitly distinguished from the published Mahamevnawa poetic translation.
- Ten verses are retained. Verse 3 is divided for study into 3a (point 15) and 3b (start of mettā). No extra canonical verse is claimed.
- Scenarios, exercises, lesson explanations, and practical guidance are original applications. They need qualified Sinhala/doctrinal review before being treated as authoritative teaching.
- The science section describes other studies, not proof of this website's effectiveness or of spiritual attainment.

## Navigation

Routes: /en and /si. Shareable fragments include #lesson=uju, #sutta=3b, #map, and #practice. Switching language preserves the fragment.

Progress and reflections are stored in the visitor's browser. No account or server database is required. Push notifications and native apps are future work.

## Validation and deployment

Vercel runs npm install and npm run build against the repository commit. No local checkout is required for the current authoring workflow. Source checks verify 15 quality records, 7 practice records, unique IDs, complete verse links, and Sinhala text coverage. Publisher embeds require internet access and remain subject to publisher availability and framing policy.

Production: https://wisdompath-zeta.vercel.app/en
