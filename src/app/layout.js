import "./globals.css";
import { Inter, Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Dominic Lakshan | Portfolio",
  description: "Porfolio site",
  author: "Dominic Lakshan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
