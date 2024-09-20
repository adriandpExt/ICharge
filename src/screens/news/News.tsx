import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Icharge from "@/assets/modern-man-using-smartphone-city.png";

const News = () => {
  return (
    <>
      <section className="flex h-[90vh] w-full items-center justify-center">
        <div className="absolute inset-0 h-full w-full rounded-bl-[4rem] rounded-br-[4rem] border-b-2 border-white bg-[url('@/assets/man-using-smartphone.png')] bg-cover bg-center shadow-2xl brightness-[30%]"></div>

        <div className="relative z-10 px-4 text-center dark:text-white md:px-8">
          <h1 className="font-staatliches text-6xl md:text-9xl">News</h1>
          <p className="font-lexendDeca mx-auto mt-4 max-w-[800px] text-base md:text-lg">
            iCharge offers a one-stop self-service mobile power bank rental
            service, providing a solution for charging your mobile devices while
            on the go.
          </p>
        </div>
      </section>
      {/* //popular blogs */}
      <div className="p-6 dark:text-white md:p-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Popular Blogs</h2>
              <p className="max-w-2xl text-gray-400">
                We share common trends, strategies ideas, opinions, short & long
                stories from the team behind company.
              </p>
            </div>
            <button className="hidden items-center text-green-400 transition-colors hover:text-green-300 md:flex">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-gray-800">
              <div className="relative">
                <img
                  src={Icharge}
                  alt="Person holding a smartphone"
                  className="h-80 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded bg-green-500 px-2 py-1 text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  iCharge offers a one-stop self-service mobile
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="iCharge logo"
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                  <span>icharge</span>
                  <span className="ml-auto">02 May</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-800">
              <div className="relative">
                <img
                  src={Icharge}
                  alt="Person holding a smartphone"
                  className="h-80 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded bg-green-500 px-2 py-1 text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  iCharge offers a one-stop self-service mobile
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <img
                    src={Icharge}
                    alt="iCharge logo"
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                  <span>icharge</span>
                  <span className="ml-auto">02 May</span>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 flex w-full items-center justify-center text-green-400 transition-colors hover:text-green-300 md:hidden">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      {/* //recent blogs */}
      <div className="p-6 dark:text-white md:p-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Recent Blogs</h2>
              <p className="max-w-2xl text-gray-400">
                We share common trends, strategies ideas, opinions, short & long
                stories from the team behind company.
              </p>
            </div>
            <button className="hidden items-center text-green-400 transition-colors hover:text-green-300 md:flex">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-lg bg-gray-800">
              <div className="relative">
                <img
                  src={Icharge}
                  alt="Person holding a smartphone"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded bg-green-500 px-2 py-1 text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  iCharge offers a one-stop self-service mobile
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <img
                    src={Icharge}
                    alt="iCharge logo"
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                  <span>icharge</span>
                  <span className="ml-auto">02 May</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-800">
              <div className="relative">
                <img
                  src={Icharge}
                  alt="Person holding a smartphone"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded bg-green-500 px-2 py-1 text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  iCharge offers a one-stop self-service mobile
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <img
                    src={Icharge}
                    alt="iCharge logo"
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                  <span>icharge</span>
                  <span className="ml-auto">02 May</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-800">
              <div className="relative">
                <img
                  src={Icharge}
                  alt="Person holding a smartphone"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded bg-green-500 px-2 py-1 text-xs font-semibold">
                  FEATURED
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">
                  iCharge offers a one-stop self-service mobile
                </h3>
                <div className="flex items-center text-sm text-gray-400">
                  <img
                    src={Icharge}
                    alt="iCharge logo"
                    width={32}
                    height={32}
                    className="mr-2 rounded-full"
                  />
                  <span>icharge</span>
                  <span className="ml-auto">02 May</span>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-8 flex w-full items-center justify-center text-green-400 transition-colors hover:text-green-300 md:hidden">
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
      {/* //All Blogs */}
      <div className="min-h-screen p-6 dark:text-white md:p-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-4xl font-bold">All Blogs</h1>
          <p className="mb-8 text-gray-400">
            We share common trends, strategies ideas, opinions, short & long
            stories from the team behind company.
          </p>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden bg-gray-800">
                <CardContent className="relative p-0">
                  <img
                    src={Icharge}
                    alt="Blog post img"
                    className="h-[600px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="mb-2 inline-block rounded bg-green-500 px-2 py-1 text-xs font-bold dark:text-white">
                      FEATURED
                    </div>
                    <h2 className="mb-2 text-2xl font-bold">
                      iCharge offers a one-stop self-service mobile
                    </h2>
                    <div className="flex items-center">
                      <img
                        src={Icharge}
                        alt="Author"
                        width={40}
                        height={40}
                        className="mr-2 rounded-full"
                      />
                      <span className="text-sm">icharge</span>
                      <span className="ml-auto text-sm text-gray-400">
                        02 May
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {["Future of Work", "Future of Data", "Future of Learning"].map(
              (title, i) => (
                <Card key={i} className="overflow-hidden bg-gray-800">
                  <CardContent className="relative p-0">
                    <img
                      src={Icharge}
                      alt="Blog post img"
                      className="h-[400px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h2 className="mb-2 text-xl font-bold">{title}</h2>
                      <p className="mb-2 text-sm text-gray-400">
                        {i === 0
                          ? "Majority of people will work in jobs that don't exist today."
                          : i === 1
                            ? "Thanks to never-ending piles of data & the amount of insight"
                            : "A constant ability to learn will be on the most crucial skills"}
                      </p>
                      <div className="flex items-center">
                        <img
                          src={Icharge}
                          alt="Author"
                          width={30}
                          height={30}
                          className="mr-2 rounded-full"
                        />
                        <span className="text-xs">icharge</span>
                        <span className="ml-auto text-xs text-gray-400">
                          02 May
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="border-green-500 bg-transparent hover:bg-green-500 hover:text-black dark:text-white"
            >
              More blogs
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
