import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <head>
        <title>객실 요금표</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
