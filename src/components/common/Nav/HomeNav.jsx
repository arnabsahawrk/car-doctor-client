import {
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";

function NavFunctionality() {
  const navigate = useNavigate();
  return (
    <div className="text-[#444444] text-2xl flex items-center gap-5 font-semibold justify-center lg:justify-normal">
      <button>
        <HiOutlineShoppingBag />
      </button>
      <button>
        <CiSearch />
      </button>
      <button
        onClick={() => navigate("/dashboard/login")}
        className="text-[#FF3811] hover:text-white hover:bg-[#FF3811] transition duration-700 ease-in-out text-lg border-2 border-[#FF3811] py-2 lg:py-3 px-4 lg:px-5 rounded"
      >
        Log In
      </button>
    </div>
  );
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 bg-gray-200 lg:bg-transparent p-4 lg:p-0 rounded">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold font-inter hover:text-[#FF3811] text-[#444444]"
      >
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            `${isActive ? "text-[#FF3811]" : ""} ${
              isPending ? "text-amber-600" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold font-inter hover:text-[#FF3811] text-[#444444]"
      >
        <HashLink to="/#about">About</HashLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold font-inter hover:text-[#FF3811] text-[#444444]"
      >
        <HashLink to="/#service">Services</HashLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold font-inter hover:text-[#FF3811] text-[#444444]"
      >
        <HashLink to="/#products">Products</HashLink>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="font-bold font-inter hover:text-[#FF3811] text-[#444444]"
      >
        <HashLink to="/#contact">Contact</HashLink>
      </Typography>
      <div className="lg:hidden grid">
        <NavFunctionality />
      </div>
    </ul>
  );
}

const HomeNav = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="shadow-none py-2 backdrop-saturate-0 backdrop-blur-0 border-none rounded-none container mx-auto px-4">
      <div className="flex items-center justify-between container mx-auto">
        <Link to="/">
          <img className="object-cover size-full" src={logo} alt="Logo" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto size-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="size-7 text-[#FF3811]" strokeWidth={2} />
          ) : (
            <Bars3Icon
              className="size-7 bg-[#444444] rounded"
              strokeWidth={2}
            />
          )}
        </IconButton>
        <div className="hidden lg:grid">
          <NavFunctionality />
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default HomeNav;
