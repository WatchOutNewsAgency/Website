import "./globals.css";

export const metadata = {
  title: "WatchOut | News Agency",
  description:
    "Watchout is a news agency that provides the latest news and updates in the IITR community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
