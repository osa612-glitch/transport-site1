export const metadata = {
  title: "Transport Company",
  description: "Vehicle transport platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial', background: '#000', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
