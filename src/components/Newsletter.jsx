import Banner from "../shared/Banner";
import bannerImg from "../assets/newslettter.png";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      <Banner
        bannerimg={bannerImg}
        heading="Each student can share their discount codes with friends"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis, nunc sit amet dictum aliquet, felis eros condimentum
            libero, non posuere nunc justo a tellus."
        btn1="I have a code"
        btn2={""}
      />
    </div>
  );
};

export default Newsletter;
