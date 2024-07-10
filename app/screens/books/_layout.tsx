// /app/books/_layout.tsx
import React from 'react';

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-6 lg:p-8">
      <header>
        <h1>Books Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Books Footer</p>
      </footer>
    </div>
  );
}
