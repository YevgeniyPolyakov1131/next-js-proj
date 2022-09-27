export default function secAssociations({children, ...pageProps }) {
    return (      
        <section class="ye-association">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 ye-images-container">
                        <picture>
                            <img src="/assets/images/cpma-logo.png" alt="cpma" data-aos="zoom-in"/>
                            <img src="/assets/images/aqgp-logo.png" alt="aqgp" data-aos="zoom-in" data-aos-delay="500"/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}