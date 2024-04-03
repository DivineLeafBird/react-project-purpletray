import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Starter",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description: "For Small teams just getting started",
      green: "/src/assets/circle-green.png",
      pink: "/src/assets/circle-pink.png",
    },
    {
      name: "Standard",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description: "For Medium teams just getting started",
      green: "/src/assets/circle-green.png",
      pink: "/src/assets/circle-pink.png",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description: "For Larger teams just getting started",
      green: "/src/assets/circle-green.png",
      pink: "/src/assets/circle-pink.png",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tertiary md:w-1/3 mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>

        {/* Pricing */}
        <div className="">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            onChange={() => setIsYearly(!isYearly)}
          ></input>
        </div>
      </div>

      {/* Pricing cards */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pack, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl "
          >
            <h3 className="text-3xl font-bold text-center text-primary ">
              {pack.name}
            </h3>
            <p className="text-center text-tertiary my-5">{pack.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$${pack.yearlyPrice}` : `$${pack.monthlyPrice}`}{" "}
              <span className="text-base text-tertiary font-medium">
                /{isYearly ? `year` : `month`}
              </span>
            </p>
            <ul className="mt-6 space-y-2 px-12 ">
              <li className="flex items-center gap-3">
                <img src={pack.green} alt="" className="w-5 " />
                Videos Lessons{" "}
              </li>
              <li className="flex items-center gap-3">
                <img src={pack.green} alt="" className="w-5 " />
                Assignment check{" "}
              </li>
              <li className="flex items-center gap-3">
                <img src={pack.green} alt="" className="w-5 " />
                Unlimited lab sessions{" "}
              </li>
              <li className="flex items-center gap-3">
                <img src={pack.green} alt="" className="w-5 " />
                Peer forum{" "}
              </li>
              <li className="flex items-center gap-3">
                <img src={pack.green} alt="" className="w-5 " />
                One on One mentoring{" "}
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary ">Get Started</button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
