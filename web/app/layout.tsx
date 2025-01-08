import './globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
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
