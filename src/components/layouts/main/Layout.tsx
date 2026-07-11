import Footer from "../Footer";
import TopBar from "../TopBar";
import BackToTop from "../BackToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="flex min-h-full w-full flex-1 flex-col">
      <TopBar />
      <div className="min-h-0 flex-1 bg-[#11071F]">{children}</div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
