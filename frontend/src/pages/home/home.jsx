import React from "react";
import Services from "../../components/services";

const Home = () => {
  return (
    <div className="bg-[#19192B] w-full overflow-hidden">
      <div className="flex justify-center flex-col items-center p-4">
        <h1 className="text-white text-3xl p-2 font-extralight">Our Services</h1>
        <p className="text-2xl font-normal pl-3 bg-gradient-to-r from-[#A3E2BB] via-[#A3E2BB] to-[#EEEEFF] bg-clip-text text-transparent text-center">
          CRAFTING EXCELLENCE, TAILORED FOR YOU: EXPLORE OUR SPECIALIZED
          SERVICES.
        </p>
      </div>
      <div className="w-full max-w-full">
        <Services number={"01"} title={"Expertise Services"} description={"Custom blockchain solutions built for enterprise needs with smart contract functionality to revolutionize your business processes."} />
        <Services number={"02"} title={"Expertise Services"} description={"Native and cross-platform mobile applications that deliver exceptional user experience across iOS and Android devices."} />
        <Services number={"03"} title={"Process"} description={"Leverage the power of artificial intelligence to automate processes, gain insights, and create intelligent systems for your business."} />
        <Services number={"04"} title={"Mobile App Development"} description={"Creating responsive, intuitive, and engaging user interfaces with modern frameworks and best practices in web development."} />
      </div>
    </div>
  );
};

export default Home;