import localFont from "next/font/local";
import "./globals.css";
import Timeline from "./components/timeline.js"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lens - A ByteJam Project",
  description: "Travel through history",
    favicon: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black bg-no-repeat bg-cover background-blur-lg`}
      >
          <div className={'backdrop-blur-sm min-h-screen w-full'}>
              {children}
          </div>
      <Timeline />
      </body>
    </html>
  );
}
