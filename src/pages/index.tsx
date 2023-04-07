import { AppHead, Card, Section } from "@/components";
import Layout from "@/layouts/Layout";
export default function Home() {
  return (
    <Layout>
      <AppHead title="Home" />
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
    </Layout>
  );
}
