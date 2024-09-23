import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SvgIcons } from "../svg-icons";
import playstore from "@/assets/icons/ic_playstore_footer.svg";
import applestore from "@/assets/icons/ic_apple_footer.svg";
import { Link } from "react-router-dom";
import { renderItems } from "../footer/utils";
import { IconName } from "../svg-icons/utils";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#022700] p-6 text-white md:p-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and social media */}
          <div className="col-span-1 hidden md:col-span-2 md:flex lg:col-span-1">
            <SvgIcons name="ic_footer_logo" size={200} />
          </div>
          <div>
            {/* Follow Us */}
            <div>
              <Label className="mb-4 flex text-xl font-semibold">
                {renderItems.follow.title}
              </Label>
              <div className="flex space-x-4">
                {renderItems.follow.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    target={item.path.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <SvgIcons name={item.icon as IconName} size={24} />{" "}
                    {/* Type assertion */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Platforms */}
          <div>
            <Label className="mb-4 text-xl font-semibold">Platforms</Label>
            <ul className="grid grid-cols-1 space-y-2">
              <Link to={"#web"}>
                <Label>Web</Label>
              </Link>
              <Link
                to={"https://apps.apple.com/us/app/icharge-ph/id6478515634"}
                target="_blank"
              >
                <Label>iOS</Label>
              </Link>
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=com.phl.charge"
                }
                target="_blank"
              >
                <Label>Android</Label>
              </Link>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <Label className="mb-4 text-xl font-semibold">About Us</Label>
            <ul className="grid grid-cols-1 space-y-2">
              <Link to={"/features"}>
                <Label>Features</Label>
              </Link>
              <Link to={"/faqs"}>
                <Label>FAQs</Label>
              </Link>
            </ul>
          </div>

          {/* Company */}
          <div>
            <Label className="mb-4 text-xl font-semibold">Company</Label>
            <ul className="grid grid-cols-1 space-y-2">
              <Link to={""}>
                <Label>Partner with Us</Label>
              </Link>
              <Link to={""}>
                <Label>Contact</Label>
              </Link>
              <Link to={""}>
                <Label>Support</Label>
              </Link>
              <Link to={""}>
                <Label>User Agreement</Label>
              </Link>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 text-center md:col-span-2 lg:col-span-1 lg:text-start">
            <Label className="mb-4 text-2xl font-bold">
              Stay in the loop with everything you need to know.
            </Label>
            <div>
              <Label className="mb-4">Join our newsletter</Label>
            </div>
            <div className="grid-col grid gap-2 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email..."
                className="border-green-700 bg-white text-black"
              />
              <Button variant={"default"}>
                Subscribe <ArrowRight />
              </Button>
            </div>
            <div className="al mt-5 grid grid-cols-1">
              <Label className="mb-1 text-left text-xl font-semibold">
                Download the App
              </Label>
              <div className="flex">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.phl.charge"
                  target="_blank"
                  className="mr-1"
                >
                  <img
                    src={playstore}
                    alt="Google Play"
                    width={180.32}
                    height={48.72}
                  />
                </Link>
                <Link
                  to="https://apps.apple.com/us/app/icharge-ph/id6478515634"
                  target="_blank"
                >
                  <img
                    src={applestore}
                    alt="App Store"
                    width={180.32}
                    height={48.72}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-green-800 pt-6 sm:flex-row">
          <Label>&copy; 2024 Quanta Dance, Inc</Label>
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
