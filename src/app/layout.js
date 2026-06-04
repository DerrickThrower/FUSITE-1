import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "FUSION Website",
  description: "Welcome",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          {/* Global navbar: overlays the top of every page's hero. */}
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
