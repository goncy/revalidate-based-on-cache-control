import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "appncy-project",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
