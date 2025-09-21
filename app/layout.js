import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"] 
});

export const metadata = {
  title: "Way.Farer — Your Next Adventure Awaits",
  description: "Explore stunning destinations, unique experiences, and unforgettable journeys with Way.Farer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
