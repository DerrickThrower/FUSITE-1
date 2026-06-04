import "./globals.css";
import { Providers } from "./providers";
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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
