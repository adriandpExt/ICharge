import { Link } from "react-router-dom";
import { Label } from "../ui/label";

interface LinksProps {
  label: string;
  path: string;
}

interface SectionItemProps {
  title: string;
  links: LinksProps[];
  onClick?: () => void;
}

const SectionItem = (props: SectionItemProps) => {
  const { title, links, onClick } = props;
  return (
    <div className="text-center lg:text-start">
      <Label className="mb-4 text-xl font-semibold">{title}</Label>
      <ul className="grid grid-cols-1 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.path} onClick={onClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionItem;
