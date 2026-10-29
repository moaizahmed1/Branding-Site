import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/sections/Footer";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
