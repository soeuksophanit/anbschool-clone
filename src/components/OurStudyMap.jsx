import Card from "./Card";

const OurStudyMap = ({ cards }) => {
  return (
    <section
      id="#study-map"
      className="our-study w-[1200px] mx-auto my-[64px] max-[1230px]:w-[97%]"
    >
      <div className="our-study-info w-[80%] mx-auto text-center mb-[64px]">
        <h1 className="text-[48px] font-[600]">OUR STUDY MAP</h1>
        <div className="our-study-info">
          <p className="text-[#333333]">
            At ABOVE & BEYOND School, learners can study with abundant learning
            contents.
          </p>
          <p className="text-[#333333]">
            They are provided with Above & Beyond origin contents developed by
            Korean IT professors and software developers, and moreover they can
            access 20,000+ Udemy learning contents for free.
          </p>
        </div>
      </div>
      <div className="wrapper-card w-full grid grid-cols-3 gap-[28px] max-[1100px]:grid-cols-2 max-[766px]:grid-cols-1">
        {cards.map((card) => (
          <Card key={card.title} cards={card} />
        ))}
        <section className="card px-[22px] hover:-translate-y-2 duration-200 h-[152px] flex items-center justify-center gap-[12px] shadow-sm bg-[#24255A]">
          <div className="card-des max-[766px]:text-center">
            <p className="text-[20px] font-[500] text-white">Find Out More</p>
            <p className="text-[17px] text-white">
              Of course, you can find more classes if you want.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurStudyMap;
