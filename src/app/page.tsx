import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
