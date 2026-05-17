import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arbab Ansari — Applied AI · AI Software Engineer · TPM",
  description:
    "Portfolio of Arbab Ansari — building applied AI products at the intersection of engineering and product. Based in New York.",
  openGraph: {
    title: "Arbab Ansari — Applied AI · AI SWE · TPM",
    description:
      "Applied AI engineer and technical PM. Shipping intelligent products from prototype to production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
