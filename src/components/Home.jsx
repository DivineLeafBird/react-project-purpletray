import bannerImg from "../assets/banner-img.png";
import Banner from "../shared/Banner";
const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20" id="home">
      <Banner
        bannerimg={bannerImg}
        heading="Develop your skills with deligence"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
        btn1={"Get Started"}
        btn2={"Discount"}
      />
    </div>
  );
};

export default Home;
