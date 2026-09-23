import { ReactNode } from "react";
import Navbar from "./_modules/components/navbar";
import Footer from "./_modules/components/footer";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] min-h-screen space-y-4">
      <header className="container mx-auto px-4 sm:px-0">
          <Navbar />
      </header>

      <main className="container mx-auto px-4 sm:px-0">
        {children}
      </main>

      <footer  className="container mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
