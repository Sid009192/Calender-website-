import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Wall Calendar',
  description: 'A beautiful wall calendar app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-transparent text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
