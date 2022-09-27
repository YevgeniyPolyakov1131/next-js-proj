export default function divContacts({children, ...pageProps }) {
    return (      
        <div class="col-sm-2 ye-contacts" data-aos="zoom-in">
            <div>  
                <img src="/assets/icons/clock.png" alt="clock"/>
                <h3>HORAIRE D'OUVERTURE</h3>
                <p>Lun - Ven : 9h - 18h</p>
                <p>Sam : 9h - 17h</p>
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
    );
}

