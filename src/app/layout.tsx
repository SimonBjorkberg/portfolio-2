import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProjectProviderWrapper from "./context/project.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simon Björkberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-dvh scrollbar-hide`}>
        <ProjectProviderWrapper>
          {children}
        </ProjectProviderWrapper>
      </body>
    </html>
  );
}
