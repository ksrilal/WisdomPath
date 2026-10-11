import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "WisdomPath — Understand. Reflect. Live kindly.", description: "Explore the Karaṇīya Mettā Sutta through bilingual lessons, interactive maps, and small daily practices. Sinhala and English.", robots: { index: true, follow: true } };
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
