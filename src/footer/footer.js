import '../footer/footer.scss';
/* import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom"; */

export default function Footer() {
  /* var engb_text = getEngb_text(); */
  
  return (
    /* @if (Route::current()->getName()=='services')
      <footer className="verdastro">
    @else
      <footer className="grigiastro">
    @endif */
    <footer className="verdastro">
      <div className="container-custom">
        <h2>Gecko <br/> Devs</h2>
        <p>Gecko Developers brand and logo are trademarks of Gecko Developers S.r.l. © 2021.</p>
      </div>

      <div className="divider">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="white"></div>
        <div className="light-green"></div>
        <div className="green"></div>
        <div className="dark-green"></div>
        <div className="gray"></div>
      </div>

        {/* <div className="social">
          <a href=""><i className="fab fa-linkedin"></i></a>
          <a href=""><i className="fab fa-instagram"></i></a>
        </div>  */}
    </footer>
  );
};