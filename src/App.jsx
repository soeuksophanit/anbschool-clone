import Header from "./components/Header";
import Hero from "./components/Hero";
import { links } from "./data/links";

const App = () => {
  return (
    <>
      <Header links={links} />
      <Hero />
    </>
  );
};

export default App;
