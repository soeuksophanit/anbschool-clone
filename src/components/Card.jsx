const Card = ({ cards }) => {
  const { img, title, category } = cards;
  return (
    <section className="card cursor-pointer group px-[22px] hover:-translate-y-2 hover:bg-[#24255A] hover:text-white duration-500 h-[152px] max-[1100px]:h-[180px] max-[1100px]:py-4 flex items-center justify-center gap-[12px] bg-white shadow-sm max-[1100px]:flex-col max-[1100px]:items-start max-[110px]:hover:-translate-y-2 max-[766px]:items-center">
      <div className="wrap-img w-[70px] h-[70px] rounded-full flex justify-center items-center bg-[#F1F1F1]">
        <img src={img} alt={title} className="w-[40px] h-[40px] object-cover" />
      </div>
      <div className="card-des w-[80%] max-[1100px]:w-auto max-[1100px]:text-left max-[766px]:text-center">
        <p className="text-[20px] font-[500]">{title}</p>
        <p className="text-[17px] font-[300] text-[#333333] group-hover:text-white">
          {category}
        </p>
      </div>
    </section>
  );
};

export default Card;
