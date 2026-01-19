import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superteam Brazil | O Hub de Talento Web3 do Brasil 🇧🇷",
  description: "Construa, ganhe e conecte-se com os melhores desenvolvedores e criativos. Junte-se à maior comunidade Solana da América Latina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${manrope.variable} antialiased bg-[#0A0A0F] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
