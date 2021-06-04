import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Carousel } from "react-responsive-carousel";

function Services() {
  return (
    <section>
      <div className="lg:px-10 pt-20 md:px-10 px-5">
        <div class="nine">
          <h1 className="text-3xl text-center ">Our Service</h1>
        </div>

        <div className="md:flex justify-between text-center flex-wrap py-3">
          {[
            {
              img: "/icons/online-shop.png",
              heading: "Ecommerce Store",
              subheading:
                "Find & hire top freelancers, web developers & designers inexpensively top freelancers, web developers & designers inexpensively.",
            },

            {
              img: "/icons/web-design.png",
              heading: "Website Design",
              subheading:
                "Find & hire top freelancers, web developers & designers inexpensively top freelancers, web developers & designers inexpensively.",
            },
            {
              img: "/icons/social-media.png",
              heading: "Social Media",
              subheading:
                "Find & hire top freelancers, web developers & designers inexpensively top freelancers, web developers & designers inexpensively.",
            },
          ].map((item, index) => (
            <div
              className="rounded bg-white overflow-hidden md:w-1/4 lg:w-30p py-10"
              key={index}
            >
              <div className="bar"></div>
              <Image
                clas
                src={item.img}
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <h1 className="text-3xl font-light leading-tight text-custom-coolgrey py-2">
                {item.heading}
              </h1>
              <p className="text-base font-thin text-gray-600">
                {item.subheading}
              </p>
              <div className="mt-5 more-btn">
                <a className="text-custom-crimson text-xl">
                  More
                  <span>
                    <BsArrowRight className="right-arrrow" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="testimonial-div">
        {[
          {
            title: "Inspiration",
            descriptiion:
              "Leadership is not about a title or a designation. It's about impact, influence and inspiration. Impact involves getting results, influence is about spreading the passion you have for you work, and you have to inspire team-mates and customers.",
            author: "Robin S. Sharma",
          },

          {
            title: "Work",
            descriptiion:
              "Keep your dreams alive. Understand to achieve anythingrequires failth and belief in yourself, vision, hard work, determination, and dedication. Remenber all things are possible for those who believe.",
            author: "Robin S. Sharma",
          },
          {
            title: "Result",
            descriptiion:
              " Achievements of your happiness is the only moral purpose of your life, and that happiness, not pain or mindless self-indulgence, is the proof of your moral integrity, since it is the proof and the result of your loyality to the achievements of your values.",
            author: "Robin S. Sharma",
          },
        ].map((item, index) => (
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
           <div>
          <img src="/images/testimonial.jpg" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>
        <div>
          <img src="/images/testimonial.jpg" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/testimonial.jpg" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
          </Carousel>
        ))}
      </div> */}
    </section>
  );
}
export default Services;
