export const metadata = {
  title: 'Jala Kencana Utama'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}