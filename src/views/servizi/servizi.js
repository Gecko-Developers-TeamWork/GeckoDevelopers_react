import './servizi.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Full from "./full/full";
import Individuals from "./individuals/individuals";
import Companies from "./companies/companies";
import Design from "./design/design";
import Support from "./support/support";
import ContentCreation from "./content_creation/content_creation";
import Marketing from "./marketing/marketing";
/* import { getita_text } from "../lingue/inglese"; */

export default function Servizi() {
  /* var ita_text = getita_text(); */
  return (
    <section>
      <Routes>
        <Route path="/full" element={<Full/>} />
        <Route path="/individuals" element={<Individuals/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/content-creation" element={<ContentCreation/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
      </Routes>
    </section>
  )

}