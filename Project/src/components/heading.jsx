import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { IoIosArrowBack } from "react-icons/io";
import {
  FaSearch,
  FaRegUser,
  FaRegHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import adidasLogo from "../assets/Images/adidasLogo.png";
import { useState } from "react";
// links
const links = ["men", "women", "Kid", "sale", "new & trendings"];

const Heading = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [input, setInput] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openBtn, setIsOpen] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  // function getInput Data
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  // function clear
  function handleClearInput() {
    setInput("");
  }
  function handleMenu() {
    setIsOpen(!openBtn);
    console.log(openBtn);
  }
  const handleToggleSearch = () => {
    setToggleSearch(!toggleSearch);
    console.log(toggleSearch);
  };
  return (
    <>
      <nav className="bg-white border-b-2">
        <section className="max-h-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Toggle button small screen */}
          <button
            className="md:hidden flex justify-center items-center gap-3 cursor-pointer"
            onClick={handleMenu}
          >
            {!openBtn && <FaBars className="text-3xl" />}
            <Link>
              <FaRegHeart className="text-xl" />
            </Link>
          </button>
          {/* logo */}
          <figure>
            <Link to="/us">
              <img className="md:h-16 h-10" src={adidasLogo} alt="srcLogo" />
            </Link>
          </figure>
          <ul className=" md:hidden flex space-x-4 text-black cursor-pointer">
            <Link>
              <FaRegUser />
            </Link>
            <button onClick={handleToggleSearch}>
              <FaSearch />
            </button>
            <Link to="ProductDetail">
              <BsBag />
            </Link>
          </ul>
          <section
            className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-10 transform ${
              toggleSearch ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 text-white`}
          >
            {/* small screen */}
            {/* searching, fav, addToCards */}
            <section className="md:hidden block">
              {/* Input search */}
              <form className="max-w-md mx-auto flex items-center gap-2">
                <div className="relative w-full">
                  <IoIosArrowBack
                    className="absolute top-[.3rem] left-1 text-black md:hidden block text-2xl"
                    onClick={handleToggleSearch}
                  />
                  <input
                    type="text"
                    className="block w-full p-2 text-black ps-9 pe- text-sm rounded-sm bg-[#ECEFF1] outline-0"
                    placeholder="Search"
                    value={input}
                    onChange={handleInputChange}
                  />
                  {input && (
                    <button
                      onClick={handleClearInput}
                      className="text-gray-400 absolute inset-y-0 end-2 flex items-center"
                    >
                      <p>clear</p>
                    </button>
                  )}
                </div>
              </form>
            </section>
          </section>
          {/* navigation section */}
          <section
            className={`fixed top-0 left-0 w-full h-full bg-white z-10 transform ${
              openBtn ? "translate-x-0" : "-translate-x-full"
            } md:static md:transform-none md:flex md:justify-between md:items-center md:w-[60%] transition-transform duration-300 text-white`}
          >
            {/* small screen */}
            <div className="w-full md:hidden flex items-center justify-center border-b-4">
              <figure>
                <Link to="/us">
                  <img
                    className="md:h-16 h-10"
                    src={adidasLogo}
                    alt="srcLogo"
                  />
                </Link>
              </figure>
              <FaTimes
                className="absolute right-0 text-black md:hidden block text-3xl"
                onClick={handleMenu}
              />
            </div>
            {/* links */}
            <ul className="flex flex-col space-y-4 md:flex-row  md:space-y-0 md:space-x-4">
              {links.map((item, index) => {
                const uniqueId = uuidv4();
                const myIndex = index + 1;
                return (
                  <li key={uniqueId} id={uniqueId}>
                    <Link
                      onClick={handleMenu}
                      className={`text-black uppercase ${
                        myIndex <= 3 ? "font-bold" : "text-[#F7FFFF]"
                      } `}
                      // eslint-disable-next-line no-irregular-whitespace
                      // replace(/\s+/g,"") នេះគឹជា syntax ក្នុងការ​លុប​space ក្នុង string
                      to={item}
                    >
                      {item.toLocaleLowerCase().replace(/\s+/g, "")}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* searching, fav, addToCards */}
            <section className="hidden md:block">
              {/* Input search */}
              <form className="max-w-md mx-auto flex items-center gap-2">
                <div className="relative">
                  <input
                    type="text"
                    className="block w-full p-2 px-[1.5rem] text-black ps-3 text-sm rounded-sm bg-[#ECEFF1] outline-0"
                    placeholder="Search"
                    value={input}
                    onChange={handleInputChange}
                  />
                  {input ? (
                    <button
                      onClick={handleClearInput}
                      className="text-black absolute inset-y-0 end-2 flex items-center"
                    >
                      <MdClear />
                    </button>
                  ) : (
                    <a className="text-black absolute inset-y-0 end-2 flex items-center">
                      <FaSearch />
                    </a>
                  )}
                </div>
                <ul
                  onClick={handleMenu}
                  className="flex space-x-4 text-black cursor-pointer"
                >
                  <Link>
                    <FaRegUser />
                  </Link>
                  <Link>
                    <FaRegHeart />
                  </Link>
                  <Link to="ProductDetail">
                    <BsBag />
                  </Link>
                </ul>
              </form>
            </section>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Heading;
