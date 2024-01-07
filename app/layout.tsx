import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/providers/theme-providers";
import { ConvexProviderWithClerk } from "convex/react-clerk";
// const inter = Inter({ subsets: ['latin'] })
import ConvexClientProvider from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { SearchProvider } from "@/components/providers/search-provider";
import { ModalProvider } from "@/components/modals/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme"
        >
          <ConvexClientProvider>
            <EdgeStoreProvider>
              <Toaster position="bottom-center" />
              <ModalProvider />
              <SearchProvider>{children}</SearchProvider>
            </EdgeStoreProvider>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
