import Footer from "../Footer";
import TopBar from "../TopBar";
import BackToTop from "../BackToTop";
import { ReadingProgress } from "@/components/common/Motion";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-layout">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ReadingProgress />
      <TopBar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
