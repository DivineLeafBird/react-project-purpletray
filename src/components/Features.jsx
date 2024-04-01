import featureImg from "../assets/feature.png";
const Features = () => {
  return (
    <>
      <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="lg:w-1/4">
            <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
              Why we are better than others
            </h3>
            <p className="text-base text-tertiary">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="w-full lg:w-w3/4">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
              <div className="bg-[rgba(255,255,255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={featureImg} alt="" className="z-auto" />
                  <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                    Convenient study schedule{" "}
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
                <div>
                  <img src={featureImg} alt="" className="z-auto" />
                  <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                    Convenient study schedule
                  </h5>
                </div>
              </div>
              <div className="bg-[rgba(255,255,255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer">
                <div>
                  <img src={featureImg} alt="" className="z-auto" />
                  <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                    Convenient study schedule
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;