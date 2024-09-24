const BgPolygon = () => {
  return (
    <>
      {/* background polygons */}
      <div
        className="inherit absolute -z-50 h-full w-full rounded-[2.5rem] border-[#414141] bg-[#414141]/50 backdrop-blur-xl"
        style={{
          clipPath: "polygon(0% 0%, 21% 0%, 61% 100%, 0% 100%)",
        }}
      ></div>
      <div
        className="inherit absolute -z-50 h-full w-full rounded-[2.5rem] bg-green-400/20 backdrop-blur-xl"
        style={{
          clipPath: "polygon(100% 0%, 20% 0%, 60% 100%, 100% 100%)",
        }}
      ></div>
      {/* background polygons */}
    </>
  );
};

export default BgPolygon;
