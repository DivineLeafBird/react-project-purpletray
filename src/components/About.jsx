import aboutImg1 from "../assets/about-img1.png";
import aboutImg2 from "../assets/about-img2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Center = () => {
  return (
    <div
      className="md:px-14 p-4 max-w-screen-2xl mx-auto space-x-10"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2"
        >
          <img src={aboutImg1} alt="" />
        </motion.div>
        {/* about content */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-2/5"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tertiary text-lg mb-7 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis, nunc sit amet dictum aliquet, felis eros condimentum
            libero, non posuere nunc justo a tellus.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
      {/*second section */}

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2"
        >
          <img src={aboutImg2} alt="" />
        </motion.div>
        {/* about content */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="md:w-1/2"
        >
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            Practice Coding at your own pace{" "}
            <span className="text-secondary">at any time.</span>
          </h2>
          <p className="text-tertiary text-lg mb-7 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis, nunc sit amet dictum aliquet, felis eros condimentum
            libero, non posuere nunc justo a tellus.
          </p>
          <button className="btnPrimary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Center;
