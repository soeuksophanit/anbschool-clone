import LearningCard from "./LearningCard";

const Learning = ({ learning }) => {
  return (
    <section className="learning w-full my-[64px] " id="learing">
      <div className="title text-center">
        <p className="text-[48px] font-medium mb-6">Learning</p>
        <p className="text-[18px] font-[300]">
          The learning flow is driven by the AI-powered Learning Management
          System.
        </p>
      </div>
      <main className="wrapper-learing mt-8 w-[1200px] max-[1200px]:w-[97%] m-auto grid grid-cols-5 gap-6">
        {learning.map((learns) => (
          <LearningCard key={learns} learning={learns} />
        ))}
      </main>
    </section>
  );
};

export default Learning;
