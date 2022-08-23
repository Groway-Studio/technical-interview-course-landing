import Header from "../component/shared/header";
import Hero from "../component/hero";
import Footer from "../component/shared/footer";
import Modality from "../component/modality"; 
import Calendar from "../component/calendar";
import Faqs from "../component/faqs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Modality />
      <Calendar />
      <Faqs />
      <Footer />
    </>
  );
}
