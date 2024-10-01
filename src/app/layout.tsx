import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import MainLayout from "./components/layouts/MainLayout";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Notes",
  description: "Note application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://www.brumleyprinting.com/wp-content/uploads/Post-it-notes_Getty492740892.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sticky Notes</title>
      </head>
      <body>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
