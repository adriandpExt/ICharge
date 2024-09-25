import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { SvgIcons } from "../svg-icons";
import useScroll from "@/hooks/useScroll";
import { Drawer, Language } from "./component";
import { linkList } from "./utils";

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isScroll = useScroll(window.innerHeight);

  const handleBackHome = () => {
    return navigate("/");
  };

  const renderNavibation = () => {
    return (
      <nav className="hidden space-x-6 lg:flex">
        {linkList.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <div key={item.path} className="flex items-center">
              <Button
                variant="link"
                className={`hover:text-gray-500 hover:no-underline ${
                  isActive ? "font-bold text-white underline" : ""
                } ${isScroll ? "text-black" : "text-white"}`}
              >
                <Link to={item.path as string} className="font-poppins">
                  {item.label}
                </Link>
              </Button>
              {index < linkList.length - 1 && (
                <Separator
                  orientation="vertical"
                  className={`mx-4 h-8 ${isScroll ? "bg-black" : "bg-white"}`}
                />
              )}
            </div>
          );
        })}
      </nav>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 mx-auto flex h-14 w-full items-center justify-between px-4 py-14 backdrop-blur-3xl transition-all lg:relative lg:h-28 ${location.pathname !== "/" && "bg-gradient-to-t from-[#055c00] to-[#022700]"} ${
        isScroll
          ? "border-b-[1px] bg-gradient-to-t from-[#055c00] to-[#022700]"
          : "bg-transparent"
      }`}
    >
      <Button variant={"icon"} onClick={handleBackHome}>
        <SvgIcons name="ic_icharge_white" size={150} />
      </Button>

      {renderNavibation()}

      <div className="flex items-center">
        <Drawer />
        <Language />
      </div>
    </header>
  );
};

export default NavBar;
