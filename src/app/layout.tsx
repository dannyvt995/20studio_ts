import type { Metadata } from "next";

import "@/styles/config.css";
import "@/styles/main.css";
import "@/styles/intersection.css";
import "@/styles/home.css";
import "@/styles/grid.css";
import "@/styles/lenis.css";
import "@/styles/footer.css";
import "@/styles/navbar.css";
import "@/styles/reponsive.css";
import "@/styles/clone.css";
import "@/styles/config_clone.css";
import { barlow } from '@Constants/font';
import RouterControls from "./RouterControls";
import MainLayout from "@/layouts/MainLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={barlow.className} suppressHydrationWarning={true}>
    
      <MainLayout>
        {children}
      </MainLayout>
      </body>
    </html>
  );
}
