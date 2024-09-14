import { SvgIcons } from "../svg-icons";

const follow = ["Facebook", "TikTok", "Instagram"];
const platforms = ["Web", "iOS", "Android"];
const about = ["Features", "FAQ"];

export const Footer = () => {
  const year = new Date();

  const renderLogo = () => {
    return (
      <>
        <div className="col-span-4 lg:hidden">
          <SvgIcons name={"ic_svl_gs2"} size={150} />
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <SvgIcons name={"ic_svl_gs2"} size={150} />
        </div>
      </>
    );
  };

  return (
    <footer className="border-t-2">
      <div className="grid w-full grid-cols-3 gap-4 p-5 px-20 lg:grid-cols-4">
        {renderLogo()}

        <div className="flex flex-col items-center text-center">
          <h2 className="mb-2 text-lg font-bold">Follow Us</h2>
          <ul className="space-y-1 text-left">
            {follow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-2 text-lg font-bold">Platforms</h2>
          <ul className="space-y-1 text-left">
            {platforms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-2 text-lg font-bold">About</h2>
          <ul className="space-y-1 text-left">
            {about.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="py-10 text-center font-semibold">
        &copy; {year.getFullYear()}
        <span className="ml-2 font-normal text-green-500 hover:cursor-pointer hover:underline">
          Quanta Dance, Inc
        </span>
      </p>
    </footer>
  );
};

export default Footer;
