import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'Learning Next Js',
    template: "%s || Learning Next Js"
  },
  keywords: ['Next.js', 'React', 'JavaScript', "Learning", "PlayGround"],
  description: "Trying to learn next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <Navbar/>
        </nav>
        {children}
      </body>
    </html>
  );
}
