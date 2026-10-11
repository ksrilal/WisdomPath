import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "WisdomPath — Understand. Reflect. Live kindly.",
 description: "Explore the Karaṇīya Mettā Sutta through bilingual lessons, interactive maps, and small daily practices. Sinhala and English.",
 applicationName: "WisdomPath",
 manifest: "/manifest.webmanifest",
 icons: {
  icon: [
   {url:"/favicon.ico",sizes:"16x16 32x32 48x48",type:"image/x-icon"},
   {url:"/icons/wisdompath-32.png",sizes:"32x32",type:"image/png"},
   {url:"/icons/wisdompath-192.png",sizes:"192x192",type:"image/png"}
  ],
  apple: [{url:"/apple-icon.png",sizes:"180x180",type:"image/png"}]
 },
 appleWebApp: {capable:true,title:"WisdomPath",statusBarStyle:"default"},
 robots: {index:true,follow:true}
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
