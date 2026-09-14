import { geistMono, geistSans } from "./fonts";
import TopBar from "../component/TopBar";
import Footer from "@/component/Footer";
import GoTopButton from "@/component/GoTopButton";
import metadata from "./metadata";
import "./globals.css";

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopBar />
        {children}
        <GoTopButton />
        <Footer />
      </body>
    </html>
  );
}
