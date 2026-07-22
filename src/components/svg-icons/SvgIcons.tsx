import { IconName } from "./utils";

interface SvgIconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const SvgIcons = (props: SvgIconProps) => {
  const { name, color = "#000000", size = 50, ...rest } = props;

  return (
    <svg
      {...rest}
      aria-hidden="true"
      style={{ height: size, width: size, color: color }}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default SvgIcons;
