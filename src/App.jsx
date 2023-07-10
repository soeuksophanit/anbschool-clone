import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Learning from "./components/Learning";
import OurStudyMap from "./components/OurStudyMap";
import { cards } from "./data/cardData";
import { links } from "./data/links";
import { learning } from "./data/learning";

const App = () => {
  return (
    <>
      <Header links={links} />
      <Hero />
      <OurStudyMap cards={cards} />
      <Learning learning={learning} />
    </>
  );
};

export default App;
