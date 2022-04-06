import './individuals.scss';
/* import { getEngb_text } from "../../lingue/inglese"; */


export default function Individuals() {
 /*  var engb_text = getEngb_text(); */
  return (
    <section class="container-services  individuals_el_green">
      <div class="card-mover">
        <div class="card">
          <div class="flex main-title">
            <img src="./images/icon_individuals.png" alt=""/>
            <h2>Website for Individuals</h2>
          </div>
          <p class="description">
            Having a website online is becoming one of the most efficient ways to showcase who you are, what you are capable of, as well as can act like your online portfolio. Whether you are a photographer, artist, architect, designer, musician, or a blogger, having your content and your work reached to as many people, in the most clear and well-designed way is crucial for you to increase your personal brand’s image.
          </p>
          <div class="sidetext flex">
            <img src="./images/img-services_individuals.png" alt=""/>
            <div class="text">
              <hr/>
              <h2>PLANS & STRATEGIES</h2>
              <p>
                Showcasing your work and content through a website can also help you increase credibility, while appearing more professional to your audience, fans, followers, even future employers.
              </p>
            </div>
          </div>

            <p class="ul">Through our expert developers, we offer website creation for different levels of interactivity that suits your needs and values.</p>

            <p>For more information, <a id="get-touch" class=" individuals_el_green" href="./#contacts">get in touch</a> with us!</p>
        </div>
        {/* @for($i = 0; $i < 500; $i++)
        <div class="ombra  individuals_el_green"></div>
        @endfor */}
    </div>
    </section>
  )
};