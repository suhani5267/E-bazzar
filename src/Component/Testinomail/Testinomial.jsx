import React, { useContext } from "react";
import MyContext from "../../context/Data/Context";
import Avter from "../../assests/AvtratTestinomial.avif";
import Avter2 from "../../assests/Avtar2Test.avif";
import Avter3 from "../../assests/Avtar3Test.avif";
function Testinomial() {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <section className="text-gray-600 body-font mb-10">
      <div className="container px-5 py-10 mx-auto">
        <h1
          className="title-font font-bold text-3xl text-center"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Testimonial
        </h1>
        <p
          className="title-font font-bold text-2xl text-center"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          What our <span className="text-pink-500">customers</span> are saying
        </p>
        <div className="flex flex-wrap -m-4">
          {/* First div  */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={Avter}
              />
              <p
                className="leading-relaxed"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
              <h2
                className="text-font font-bold text-sm text-gray-900 uppercase "
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
              >
                Nitik Sharma
              </h2>
              <h3
                className="text-gray-500"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Senior Product Designer
              </h3>
            </div>
          </div>
          {/* Second Div */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={Avter2}
              />
              <p
                className="leading-relaxed"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
              <h2
                className="text-font font-bold text-sm text-gray-900 uppercase "
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
              >
                Tina
              </h2>
              <h3
                className="text-gray-500"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Senior Product Designer
              </h3>
            </div>
          </div>
          {/* Third Div */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={Avter3}
              />
              <p
                className="leading-relaxed"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4"></span>
              <h2
                className="text-font font-bold text-sm text-gray-900 uppercase "
                style={{ color: mode === "dark" ? "#ff4162" : "" }}
              >
                Jhon
              </h2>
              <h3
                className="text-gray-500"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Senior Product Designer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testinomial;
