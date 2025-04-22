import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, Navbar, Footer } from "@/components";
import AppContextLoader from "@/context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastProvider from "@/utils/Toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghost Writers",
  description:
    "Ghost Writers is a streamlined tool that simplifies the article-writing process. It features real-time collaboration, grammar and style suggestions, and a distraction-free interface, helping writers produce polished, professional content with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="image/logo.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <AppContextLoader>
          <Layout>
            <Navbar />
            {children}

            <Footer />
            <ToastProvider />
          </Layout>
        </AppContextLoader>
      </body>
    </html>
  );
}
