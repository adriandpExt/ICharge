import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "../svg-icons";
import playstore from "@/assets/icons/ic_playstore.svg";
import applestore from "@/assets/icons/ic_apple.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#022700] p-6 text-white md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and social media */}
          <div className="col-span-1 hidden md:col-span-2 md:flex lg:col-span-1">
            <SvgIcons name="ic_svl_g1" size={200} />
          </div>

          <div>
            <h3 className="mb-4 flex text-xl font-semibold">Platforms</h3>
            <div className="flex space-x-4">
              <SvgIcons name="ic_facebook" size={24} />
              <SvgIcons name="ic_instagram" size={24} />
              <SvgIcons name="ic_tiktok" size={24} />
            </div>
          </div>
          {/* Platforms */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Platforms</h3>
            <ul className="grid grid-cols-1 space-y-2">
              <Link to={""}>Web</Link>
              <Link to={""}>iOS</Link>
              <Link to={""}>Android</Link>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">About Us</h3>
            <ul className="grid grid-cols-1 space-y-2">
              <Link to={""}>Features</Link>
              <Link to={""}>FAQs</Link>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Company</h3>
            <ul className="grid grid-cols-1 space-y-2">
              <Link to={""}>Partner with Us</Link>
              <Link to={""}>Contact</Link>
              <Link to={""}>Support</Link>
              <Link to={""}>User Agreement</Link>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-2xl font-bold">
              Stay in the loop with everything you need to know.
            </h3>
            <p className="mb-4">Join our newsletter</p>
            <div className="grid-col grid gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="border-green-700 bg-white text-black"
              />
              <Button className="bg-green-500 text-black hover:bg-green-600">
                Subscribe
              </Button>
            </div>
            <div className="mt-5 grid grid-cols-1 place-items-center">
              <h3 className="mb-4 text-xl font-semibold">Download the App</h3>
              <div className="flex">
                <img
                  src={playstore}
                  alt="Google Play"
                  width={100}
                  height={48}
                />
                <img src={applestore} alt="App Store" width={100} height={48} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-green-800 pt-6 sm:flex-row">
          <p>&copy; 2024 Quanta Dance, Inc</p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
