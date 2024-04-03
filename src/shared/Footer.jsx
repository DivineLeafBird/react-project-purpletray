import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="gradientBgReverse md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a href="">
            <img src={logo} alt="" className="inline-block items-center" />
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            eleifend ligula neque, at faucibus turpis ultrices sit amet.
          </p>
          <div>
            <input
              type="email"
              id=""
              name="email"
              placeholder="Enter your email"
              className="bg-emerald-50 py-2 px-4 rounded-lg focus:outline-none "
            />
            <button className="bg-secondary py-2 px-4 rounded-lg text-white -ml-2 hover:bg-primary transition-all duration-300">
              Subscribe{" "}
            </button>
          </div>
        </div>

        {/* footer items */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-5 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-secondary">
                Overview
              </a>
              <a href="/" className="block hover:text-secondary">
                Features
              </a>
              <a href="/" className="block hover:text-secondary">
                About
              </a>
              <a href="/" className="block hover:text-secondary">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-5 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-secondary">
                How does it work?
              </a>
              <a href="/" className="block hover:text-secondary">
                Where to ask questions?
              </a>
              <a href="/" className="block hover:text-secondary">
                How to get support?
              </a>
              <a href="/" className="block hover:text-secondary">
                How to get a refund?
              </a>
            </ul>
          </div>
          <div className="space-y-5 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p href="/" className=" hover:text-secondary">
                (123) 456-7890
              </p>
              <p href="/" className=" hover:text-secondary">
                1234 Street Mnarani, Kilifi - Kenya
              </p>
              <p href="/" className=" hover:text-secondary">
                support@purpletray.com
              </p>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col md:flex-row gap-8 items-center pt-8 justify-between">
        <p>
          <a href="/" className="hover:text-secondary">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/" className="hover:text-secondary">
            Terms & Conditions
          </a>
        </p>
        <p className="">&copy; 2024 PurpleTray. All Rights Reserved.</p>
        <p className="flex space-x-2">
          <a href="/" className="flex gap-2 items-center">
            <FaFacebook className="text-[#3b5998]" />
            <span className="hover:text-secondary">Facebook</span>
          </a>{" "}
          |{" "}
          <a href="/" className="flex gap-2 items-center">
            <FaXTwitter className="text-[#14171A]" />
            <span className="hover:text-secondary">Twitter</span>
          </a>{" "}
          |{" "}
          <a href="/" className="flex gap-2 items-center">
            <FaInstagram className="text-[#c13584]" />

            <span className="hover:text-secondary">Instagram</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
