import { Geist, Geist_Mono, Roboto, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeContextProvider } from "@/context/theme/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

export const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const roboto_mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-roboto-mono"
})
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto_mono.className}`}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
