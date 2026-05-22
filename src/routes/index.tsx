import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IPC Hebron Manjanikara — A Spirit-filled Congregation Since 1971" },
      {
        name: "description",
        content:
          "IPC Hebron Manjanikara is a Pentecostal church in Pathanamthitta, Kerala — a family of 61 households gathered in worship, prayer, and fellowship since 1971.",
      },
      { property: "og:title", content: "IPC Hebron Manjanikara" },
      {
        property: "og:description",
        content: "A Spirit-filled congregation rooted in faith, worship, and community since 1971.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
