const Hero = () => {
  return (
    <section className="hero flex flex-col gap-[128px] items-center mt-[64px] w-[93%] max-[1250px]:w-[97%] mx-auto mb-[64px]">
      <div className="hero-title w-[80%] max-[760px]:w-full font-[700] text-center flex flex-col items-center">
        <p className="text-[75px] max-[1200px]:text-[50px] max-[760px]:text-[22px]">
          CODE YOUR FUTURE AT
        </p>
        <p className="text-[75px] max-[1200px]:text-[50px] max-[760px]:text-[22px]">
          ABOVE & BEYOND SCHOOL
        </p>
        <p className="text-[18px] max-[760px]:mt-[32px] font-[400] text-[#24255A] w-[50%] max-[760px]:w-full">
          Prepare to start your future-proof career through collaborative,
          project-based learning. Is your future written in code?
        </p>
      </div>
      <div className="hero-img w-full">
        <img
          className="w-full object-cover object-top h-[560px] max-[760px]:h-[250px]"
          src="./images/hero.JPG"
          alt=""
        />
        <div className="hero-about-info bg-[#24255A] h-[400px] max-[760px]:justify-center max-[760px]:h-auto max-[760px]:py-[64px] max-[760px]:flex-col max-[760px]:items-center max-[760px]:text-center rounded-b-[20px] flex justify-evenly gap-[64px] max-[760px]:gap-[22px]">
          <div className="hero-about h-[70%] max-[760px]:h-auto flex justify-center items-baseline gap-3 flex-col max-[760px]:items-center">
            <a
              href="#about"
              className="text-[#24255A] bg-white py-[4px] px-[6px] rounded-sm"
            >
              About us
            </a>
            <p className="text-white">ABOVE + BEYOND SCHOOL</p>
          </div>
          <div className="hero-info w-[60%] max-[760px]:w-[90%] h-full flex flex-col justify-center">
            <p className="text-white text-[28px] max-[760px]:text-[17px] max-[760px]:font-[400] font-[500]">
              ABOVE & BEYOND School is an innovative tech school.
            </p>
            <p className="text-white text-[20px] max-[760px]:text-[17px]">
              We create a place where anyone come together to collaborate,
              create great things, and make an impact. Our students will remain
              competitive in careers in the fast-changing labour market with a
              high demand for digital talents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
