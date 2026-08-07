import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisitLogger from "@/components/VisitLogger";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VisitLogger />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
