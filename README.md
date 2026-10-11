# WisdomPath — ප්‍රඥා මඟ

A bilingual English/Sinhala website for learning and applying the Karaṇīya Mettā Sutta. Built directly through GitHub; Vercel performs installation and production builds.

## First edition
- English and Sinhala routes: /en and /si
- Six lessons with original daily applications
- Ten Pāli verses with concise editorial summaries
- Interactive concept map: cognitive, reflective, compassionate dimensions
- Eighteen flashcards with browser-local review dates
- One-, three-, and five-minute mettā practice timer
- Browser-local progress, bookmarks, reflections, and JSON reflection export
- Light/dark themes, responsive layouts, and reduced-motion support
- Source library with distinctions between Buddhist teaching, interpretation, exercises, and scientific evidence

## Content status
The three-dimension framework comes from supplied presentation images, not formal divisions of the sutta. The linked video's transcript and presenter context are not verified. Sinhala wording, Pāli transcription, and doctrinal summaries await qualified review. The website makes no measured claim of increasing wisdom or treating a medical condition.

## Privacy
No account, server-side journal collection, analytics, or cloud sync. Reflections and progress use localStorage in the browser profile. Clearing site data deletes them; other people using that profile can access them. Google Fonts is loaded externally. Export reflections before clearing site data.

## Development
Next.js App Router, React, TypeScript, handcrafted CSS/SVG, and Lucide icons. Source content lives in src/content/lessons.ts. Keep stable lesson IDs when editing published content.
Web push notifications and cross-device sync are future work.

## Verification
Vercel runs next build with TypeScript checking. Browser QA should cover navigation, locale/theme switching, map selection, flashcard reviews, timer controls, and journal save/export/delete. No local checkout is required for the GitHub/Vercel workflow.
