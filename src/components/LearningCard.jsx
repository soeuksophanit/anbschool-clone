const LearningCard = ({ learning }) => {
  const { img, title, des } = learning;
  return (
    <section className="learning-card">
      <div className="card-img relative">
        <img className="w-[80px] mx-auto h-[80px]" src={img} alt={title} />
        <img
          className="arrow absolute w-[50px] h-6 top-[50%] right-0 translate-x-[50%] translate-y-[-50%]"
          src="./public/arrow.svg"
          alt="arrow"
        />
      </div>
      <div className="learning-info text-center mt-4">
        <p className="text-[20px] font-medium">{title}</p>
        <p className="text-[17px] ">{des}</p>
      </div>
    </section>
  );
};

export default LearningCard;
