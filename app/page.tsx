import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Contact } from "@/components/sections/contact";
import { Examples } from "@/components/sections/examples";
import { Hero } from "@/components/sections/hero";
import { Pricing } from "@/components/sections/pricing";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-background font-sans text-foreground">
      <Header />
      <Hero />
      <Services />
      <Process />
      <Examples />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
