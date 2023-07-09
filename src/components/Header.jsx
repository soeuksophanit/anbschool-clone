import { useState } from "react";

const Header = ({ links }) => {
  const [btn, setBtn] = useState(false);
  const btnToggle = () => setBtn(!btn);
  let classes =
    "hidden max-[970px]:fixed p-[20px] max-[970px]:flex max-[970px]:h-[100vh] max-[970px]:bg-white max-[970px]:top-0 max-[970px]:left-[-100%] max-[970px]:w-[60%] max-[970px]:flex-col gap-[64px] duration-300 ";
  classes += btn && " max-[970px]:!left-0";

  return (
    <header className="py-[10px] px-[20px] flex justify-between items-center bg-white shadow-sm max-[970px]:py-[18px]">
      <a href="#">
        <img
          src="./images/logo.JPG"
          alt="logo_anb"
          className="w-[115px] h-[45px] object-contain"
        />
      </a>
      <nav className="navbar max-[970px]:hidden">
        <ul className="flex items-center gap-[32px]">
          {links.map((url, index) => (
            <li key={url.title}>
              <a
                href={url.link}
                className="relative after:absolute after:transition-all after:block after:contents-[''] after:w-[0] after:h-[2px] after:bg-[#24255A] after:rounded-md hover:after:w-full"
              >
                {url.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="apply">
        <div className="btn-apply flex gap-[6px] max-[970px]:hidden">
          <a
            href="#"
            className="py-[15px] px-[20px] rounded-[50px] border border-[#24255A]"
          >
            Learing Platform
          </a>
          <a
            href="#"
            className="py-[15px] px-[20px] rounded-[50px] border bg-[#24255A] text-white"
          >
            Apply Now
          </a>
        </div>
        <svg
          onClick={btnToggle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hidden max-[970px]:block cursor-pointer "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <header className={classes}>
        <nav className="max-[970px]:flex max-[970px]:w-full items-center justify-between">
          <a href="#">
            <img
              className="w-[115px] h-[40px] justify-between"
              src="./images/logo.JPG"
              alt="logo"
            />
          </a>
          <svg
            onClick={btnToggle}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </nav>
        <ul className="flex gap-[22px] max-[970px]:flex-col">
          {links.map((url, index) => (
            <li key={url.link}>
              <a
                href={url.link}
                className="relative after:absolute after:transition-all after:block after:contents-[''] after:w-[0] after:h-[2px] after:bg-[#24255A] after:rounded-md hover:after:w-full"
              >
                {url.title}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </header>
  );
};

export default Header;
