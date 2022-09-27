import Copyrights from "./copyrights";

export default function Footer({ children }) {
    return (      
          <footer>       
            <div class="container">
                <div class="row justify-content-between ye-footer-top">
                    <div class="col-md-3 ye-slogan">
                        <picture>
                            <img class="img-fluid" src="/assets/images/logo/logo1.png" alt="logo"/>
                        </picture>
                        <p>Delectus molestiae facere eveniet accusantium eius veritatis nisi provident voluptates, tempora, reiciendis eos. Consequuntur fuga porro modi, recusandae veritatis amet obcaecati nam.</p>
                    </div>
                    <div class="col-md-2 ye-navigation">
                        <p><a href="/">Accueil</a></p>
                        <p><a href="/exterminateur">Exterminateur</a></p>
                        <p><a href="/boutique">Boutique</a></p>
                        <p><a href="/services">Services</a></p>
                        <p><a href="/a-propos">Contact</a></p>
                    </div>
                    <div class="col-md-3 ye-contacts">
                        <div>  
                            <img src="/assets/icons/clock.png" alt="clock"/>                  
                            <h3>HORAIRE D'OUVERTURE</h3>
                            <p><a href>Lun - Ven : 9h - 18h</a></p>
                            <p><a href>Sam : 9h - 17h</a></p>
                        </div>
                        <div>
                            <img src="/assets/icons/phone-call.png" alt="phone"/>
                            <h3>Téléphone</h3>
                            <p><a href="tel:+11112223344">111-222-3344</a></p>
                        </div>
                        <div>
                            <img src="/assets/icons/location-pin.png" alt="location"/>
                            <h3>Adresse</h3>
                            <p><a href="https://goo.gl/maps/aLJ9AZoRkUZh1MWn6" target="_blank">2900 Bd Édouard-Montpetit, Montréal, QC H3T 1J4</a></p>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center ye-footer-bottom">
                    <Copyrights></Copyrights>
                </div>
            </div>

            <div class="ye-en-haut"></div>
          </footer>
      );
}