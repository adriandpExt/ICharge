import { ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-lg font-bold">ICharge</h2>
          <div className="flex justify-center space-x-2 md:justify-start">
            <Button className="border-white text-white hover:bg-white hover:text-gray-800">
              Joos for Business <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Get the App <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-8">
            <h2 className="mb-2 text-lg font-bold">GET IN TOUCH</h2>
            <p>Customer Support</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-lg font-bold">IMPORTANT LINKS</h2>
          <ul className="space-y-2">
            {[
              "About Us",
              "FAQ",
              "Partner with Us",
              "Privacy Policy",
              "Terms & Conditions",
              "User Agreement",
            ].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={
                    index === 2 ? "text-orange-500" : "hover:text-orange-500"
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-lg font-bold">Platforms</h2>
          <div className="space-y-4">
            <img
              src="/placeholder.svg?height=30&width=100"
              alt="Nosh logo"
              className="h-8"
            />
            <img
              src="/placeholder.svg?height=30&width=100"
              alt="Joos Solar logo"
              className="h-8"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-4 text-lg font-bold">DOWNLOAD THE APP</h2>
          <div className="mb-6 flex flex-col space-y-2">
            {["Google Play", "App Store"].map((alt, index) => (
              <img
                key={index}
                src={`/placeholder.svg?height=40&width=135`}
                alt={`Download on ${alt}`}
                className="mx-auto h-10 md:mx-0"
              />
            ))}
          </div>
          <h2 className="mb-4 text-lg font-bold">SOCIAL NETWORKS</h2>
          <div className="flex justify-center space-x-4 md:justify-start">
            <a
              href="#"
              className="rounded-full bg-orange-500 p-2 hover:bg-orange-600"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-orange-500 p-2 hover:bg-orange-600"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="rounded-full bg-orange-500 p-2 hover:bg-orange-600"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p>&copy; 2024 Joos Power</p>
      </div>
    </footer>
  );
};

export default Footer;
