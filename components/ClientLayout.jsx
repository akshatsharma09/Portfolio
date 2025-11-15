"use client";

import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
