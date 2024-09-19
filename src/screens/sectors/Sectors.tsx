const Sectors = () => {
  return (
    <>
      <section className="flex h-[90vh] w-full items-center justify-center">
        <div className="absolute inset-0 h-full w-full rounded-bl-[4rem] rounded-br-[4rem] border-b-2 border-white bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-center shadow-2xl brightness-[30%]"></div>

        <div className="relative z-10 px-4 text-center text-white md:px-8">
          <h1 className="font-staatliches text-6xl md:text-9xl">Sectors</h1>
          <p className="font-lexendDeca mx-auto mt-4 max-w-[800px] text-base md:text-lg">
            iCharge offers a one-stop self-service mobile power bank rental
            service, providing a solution for charging your mobile devices while
            on the go.
          </p>
        </div>
      </section>
    </>
  );
};

export default Sectors;
