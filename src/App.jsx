import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStudyMap from "./components/OurStudyMap";
import { cards } from "./data/cardData";
import { links } from "./data/links";

const App = () => {
  return (
    <>
      <Header links={links} />
      <Hero />
      <OurStudyMap cards={cards} />
    </>
  );
};

export default App;
