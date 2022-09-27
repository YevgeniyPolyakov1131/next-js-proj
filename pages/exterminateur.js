import Head from 'next/head';
import Layout from '../components/layout';
import JotformSoumission from '../components/jotform-soumission';

// sections
import SecAssociations from '../components/sec-associations';
import DivContacts from '../components/div-contacts';

export default function Exterminateur() {
    return (
      <Layout currentPage="exterminateur">
        <Head>
          <title>Exterminateur</title>
          <meta name="description" content="Votre description"></meta>
        </Head>
  
        <main>
  
        <section class="ye-banner-top-gen ye-p-exterminateur">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 ye-description-container">
                        <h1>Exterminateur</h1>
                        <h3>SPÉCIALISTES EN GESTION PARASITAIRE</h3>
                    </div>
                </div>
            </div> 
        </section>


        <section class="ye-section-sous-banner">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-7 ye-section-sous-banner-container">
                        <h1 data-aos="fade-up" data-aos-delay="400">Votre service de gestion d'espèces nuisibles <span>à Montréal</span></h1>
                        <p data-aos="fade-up" data-aos-delay="600">Repudiandae quasi iste facere sit consequatur ab, aperiam similique necessitatibus quae eaque, corporis aliquam. Praesentium numquam sapiente quos, eius corporis illum rem aspernatur voluptatem fugiat? </p>
                        <div class="ye-boutons-container">
                            <a href="/services" class="ye-btn-rouge" data-aos="zoom-in-up">Nos services</a>
                            <a href="/boutique" class="ye-btn-noir" data-aos="zoom-in-up">La boutique</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>

        <section class="ye-professionnels">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8">
                        <h1 data-aos="fade-right">Des professionnels <span>à votre service</span></h1>
                        <p data-aos="fade-up">Quod, quas asperiores! Natus officiis doloremque molestiae! Laborum, alias porro saepe accusantium sint veniam ducimus ut obcaecati necessitatibus magnam magni? Perspiciatis quam quos placeat blanditiis at adipisci obcaecati officia sit!</p>
                        <p data-aos="fade-up">Doloremque at omnis soluta architecto nesciunt debitis? Velit odio eveniet odit tempora sint nihil non.</p>
                    </div>
                </div>
            </div>

        </section>

        <section class="ye-produit-outil">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-sm-9 ye-produit-outil-container">
                        <h1 data-aos="fade-left">Des produits et des outils <span>performants</span></h1>
                        <p data-aos="fade-up">Laboriosam architecto delectus libero deleniti ipsa vel consequuntur perspiciatis alias repellendus quod? Debitis, amet? Odio impedit beatae voluptatibus rem alias, a ipsa. Quibusdam distinctio tempore sunt excepturi necessitatibus cum velit.</p>
                        <p data-aos="fade-up">Ea illum natus necessitatibus quia omnis hic dignissimos! Necessitatibus molestias earum nesciunt.</p>
                        <a href="/boutique" class="ye-btn-rouge" data-aos="zoom-in-up">Voir la boutique</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="ye-p-exterminateur-services">
            <div class="container ye-corr">
                <div class="row">
                    <div class="col-sm-3 ye-service-container" data-aos="fade-right">
                        <h3>Extermination résidentielle</h3>
                    </div>
                    <div class="col-sm-3 ye-service-container" data-aos="fade-right" data-aos-delay="200">
                        <h3>Extermination commerciale</h3>
                    </div>
                    <div class="col-sm-3 ye-service-container" data-aos="fade-right" data-aos-delay="400">
                        <h3>Extermination des parasites sur votre site</h3>
                    </div>
                    <div class="col-sm-3 ye-service-container" data-aos="fade-right" data-aos-delay="600">
                        <h3>capture d’animaux sauvages</h3>
                    </div>
                </div>
            </div>

        </section>

        <section class="ye-section ye-contactez-nous ye-p-exterminateur" data-aos="fade-up">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-9">
                        <h2>Un  locataire indésirable?</h2>
                        <h1>Appelez nos experts!</h1>
                        <p>Obtenez un résultat fiable en extermination d'espèces nuisibles.</p>
                    </div>

                    <div class="col-sm-3 ye-section-call">
                        <a href="tel:+11112223344" class="ye-btn-call">111-222-3344</a>
                    </div>

                </div>

            </div>

        </section>


        <section class="ye-obtenir-soumission ye-corr" id="soumission">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-5 ye-formulaire" data-aos="fade-right">
                        <div class="ye-label-container">
                            <h2>pour Obtenir une</h2>
                            <h1>soumission</h1>
                            <JotformSoumission></JotformSoumission>
                            <picture>
                                <img src="/assets/icons/fleche-rouge.png" alt="fleche-rouge"/>
                            </picture>
                        </div>
                        

                    </div>
                    <DivContacts></DivContacts>
                    <div class="col-sm-5 ye-video" data-aos="fade-left">
                        <video autoplay muted loop>
                            <source src="/assets/video/bug.mp4" type="video/mp4"/>
                            Your browser does not support HTML5 video.
                        </video>
                    </div>

                </div>

            </div>

        </section>

        <SecAssociations></SecAssociations>
  
  
      </main>
  
  
  
      </Layout>
    )
  }
  