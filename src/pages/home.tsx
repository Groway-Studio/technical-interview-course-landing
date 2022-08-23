import { Hero, Modality, Calendar, Faqs, Instructor } from "../component";
import { Header, Footer } from "../component/shared";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Modality />
      <Calendar />
      <Instructor />
      <Faqs />
      <Footer />
    </>
  );
}
