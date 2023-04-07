import { AppHead, Card, Header, Section } from "@/components";

export default function Home() {
  return (
    <>
      <AppHead title="Home" />
      <Header />
      <Section title="Latest Posts">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
      <Section title="Most Poppulate">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Section>
    </>
  );
}
