import Header from "./_/Header";
import "../styles/global.scss";
import localFont from "@next/font/local";

const manRopeFont = localFont({
  src: "../assets/fonts/Manrope-VariableFont_wght.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manRopeFont.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>DEER</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
