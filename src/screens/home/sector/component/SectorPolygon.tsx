import { PolygonProps } from "../type";
import { ReactElement, useState } from "react";
import { Hexagon, Text } from "react-hexgrid";
import { sectorsDesktop } from "../utils";
import { useNavigate } from "react-router-dom";

const SectorPolygon = ({
  platform = "desktop",
}: PolygonProps): ReactElement[] | ReactElement => {
  const setHexColor = (name: string) => {
    if (name) {
      return "fill-[#D4EAD3] hover:fill-[#94E290]";
    } else {
      return "fill-slate-400/5";
    }
  };
  const [hoveredHex, setHoveredHex] = useState<number | null>();
  const navigate = useNavigate();
  const handleNavigate = (location: string) => {
    window.scrollTo(0, 0);
    navigate(`sectors/${platform === "mobile" ? "" : location}`);
  };

  return platform === "desktop" ? (
    sectorsDesktop.map(({ name, q, r, s, navigation }, index) => {
      return (
        <Hexagon
          q={q}
          r={r}
          s={s}
          className={setHexColor(name)}
          key={index}
          style={{
            stroke: "gray",
            strokeWidth: "0.05",
            backdropFilter: `blur(12px)`,
            WebkitBackdropFilter: `blur(12px)`,
          }}
          filter={
            hoveredHex === index && name !== "" ? "url(#inner-shadow)" : ""
          }
          onMouseEnter={() => setHoveredHex(index)}
          onMouseLeave={() => setHoveredHex(null)}
          onClick={() => handleNavigate(navigation as string)}
        >
          <Text
            fontSize={3.5}
            className="fill-black font-staatliches tracking-wide"
            style={{
              strokeWidth: "0",
            }}
          >
            {name}
          </Text>
        </Hexagon>
      );
    })
  ) : (
    <svg
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      onClick={() => handleNavigate("")}
    >
      <polygon
        points="100,0 300,0 400,200 300,400 100,400 0,200"
        fill="#94E290"
        filter="url(#inner-shadow-mobile)"
      />
      <text
        x="200"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="70"
        className="font-staatliches tracking-wide"
      >
        SECTORS
      </text>
    </svg>
  );
};

export default SectorPolygon;
