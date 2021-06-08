import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        className="testimonial-div"
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <div className="myCarousel">
            <p className="text-3xl">”</p>
            <h1 className="text-4xl font-light py-5">Inspiration</h1>
            <p className="text-xl font-thin italic font-serif">
              Leadership is not about a title or a designation. It's about
              impact, influence and inspiration. Impact involves getting
              results, influence is about spreading the passion you have for you
              work, and you have to inspire team-mates and customers.
            </p>
            <p className="py-5">Robin S. Sharma</p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p className="text-3xl">”</p>
            <h1 className="text-4xl font-light py-5">Work</h1>
            <p className="text-xl font-thin italic font-serif">
              Keep your dreams alive. Understand to achieve anythingrequires
              failth and belief in yourself, vision, hard work, determination,
              and dedication. Remenber all things are possible for those who
              believe.
            </p>
            <p className="py-5">Gail Devers</p>
          </div>
        </div>

        <div>
          <div className="myCarousel">
            <p className="text-3xl">”</p>
            <h1 className="text-4xl font-light py-5">Result</h1>
            <p className="text-xl font-thin italic font-serif">
              Achievements of your happiness is the only moral purpose of your
              life, and that happiness, not pain or mindless self-indulgence, is
              the proof of your moral integrity, since it is the proof and the
              result of your loyality to the achievements of your values.
            </p>
            <p className="py-5">Ayn Rand</p>
          </div>
        </div>
      </Carousel>
    );
  }
}
