import Head from 'next/head';
import Layout from '../components/layout';
import JotformSoumission from '../components/jotform-soumission';

// sections
import SecAssociations from '../components/sec-associations';
import DivContacts from '../components/div-contacts';

export default function Home() {
  return (
    <Layout currentPage="accueil">
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Votre description"></meta>
      </Head>

      <main>

        <section class="ye-banner-top">
            <picture class="ye-background">
                <img src="/assets/images/accueil/banner-top.jpg" alt="banner-top"/> 
            </picture>    

            <div class="container ye-corr">
                <div class="row">
                    <div class="col-sm-5 ye-description-container">
                        <h3>Experts en gestion parasitaire</h3>
                        <picture>
                            <img  class="img-fluid" src="/assets/images/accueil/expert.png" alt="exp"/>
                        </picture>
                        <div class="ye-boutons-container">
                            <a href="/services" class="ye-btn-rouge">nos services</a>
                            <a href="/boutique" class="ye-btn-blanc">la boutique</a>
                        </div>
                    </div>
                </div>
            </div> 

            <picture class="ye-background ye-moustache">
                <img src="/assets/images/accueil/banner-top.png" alt="banner-top"/>   
            </picture>  

        </section>

        <section class="ye-gestion-parasitaire">
          <div class="container">
              <div class="row justify-content-end">
                  <div class="col-sm-6">
                      <h2 data-aos="fade-left" data-aos-delay="200">La gestion parasitaire, </h2> 
                      <h2 data-aos="fade-left" data-aos-delay="500">ça nous connait <span>depuis 1966</span></h2>
                      <p data-aos="fade-up" data-aos-delay="500">Dolor iure dolorem dignissimos eligendi odit tempore quis quae adipisci ullam in assumenda, iusto corporis recusandae reprehenderit quasi, vel provident ipsa molestiae dolore iste similique? Autem, unde. Impedit sint libero, sapiente non neque assumenda modi porro eius eligendi rerum odit, voluptates, quis quibusdam qui sed?</p>
                  </div>
              </div>
          </div>
        </section> 

        <section class="ye-section ye-services">
          <div class="container">
              <div class="row">
                  <div class="col-sm-3 text-center px-5">
                      <picture>
                          <img src="/assets/images/accueil/01.png" alt="01" data-aos="fade-up"/>
                      </picture>
                      <h3 data-aos="fade-up">Vente de produits</h3>
                      <p data-aos="fade-up">Cum, molestias laboriosam, nesciunt fuga hic deleniti recusandae, veniam quisquam eaque voluptatibus impedit. Quaerat modi corporis dolor!</p>
                      <a href="/boutique" class="ye-btn-rouge" data-aos="zoom-in-up">En savoir plus</a>
                  </div>

                  <div class="col-sm-3 text-center px-5">
                      <picture>
                          <img src="/assets/images/accueil/02.png" alt="02" data-aos="fade-up" data-aos-delay="300"/>
                      </picture>
                      <h3 data-aos="fade-up" data-aos-delay="300">Élimination des rongeurs</h3>
                      <p data-aos="fade-up" data-aos-delay="300">Dolores architecto magni consequuntur nostrum nesciunt? Molestias illum ipsum omnis officia ut quaerat nihil ex recusandae doloribus.</p>
                      <a href="/exterminateur" class="ye-btn-rouge" data-aos="zoom-in-up" data-aos-delay="300">En savoir plus</a>
                  </div>

                  <div class="col-sm-3 text-center px-5">
                      <picture>
                          <img src="/assets/images/accueil/03.png" alt="03" data-aos="fade-up" data-aos-delay="600"/>
                      </picture>
                      <h3 data-aos="fade-up" data-aos-delay="600">Extermination d’insectes</h3>
                      <p data-aos="fade-up" data-aos-delay="600">Repudiandae quo perferendis neque quas voluptate molestiae sunt laboriosam commodi, explicabo quam libero nemo expedita at quisquam.</p>
                      <a href="/services" class="ye-btn-rouge" data-aos="zoom-in-up" data-aos-delay="600">En savoir plus</a>
                  </div>

                  <div class="col-sm-3 text-center px-5">
                      <picture>
                          <img src="/assets/images/accueil/04.png" alt="04" data-aos="fade-up" data-aos-delay="900"/>
                      </picture>                    
                      <h3 data-aos="fade-up" data-aos-delay="900">Relocalisation de bestioles</h3>
                      <p data-aos="fade-up" data-aos-delay="900">Quae ipsum doloribus rem quis adipisci nulla vel distinctio architecto veniam inventore commodi, ea debitis laudantium quisquam.</p>
                      <a href="/services" class="ye-btn-rouge" data-aos="zoom-in-up" data-aos-delay="900">En savoir plus</a>
                  </div>                                                
              </div>
          </div>
        </section>       

        <section class="ye-section ye-contactez-nous" data-aos="fade-up">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-sm-8">
                      <h2>Mais quel est cet intrus?</h2>
                      <h1>CONTACTEZ-NOUS!</h1>
                      <p>Nous sommes spécialisés dans la reconnaissance de différents types de parasites.</p>
                  </div>

                  <div class="col-sm-3 ye-section-call" data-aos="zoom-in" data-aos-delay="100">
                      <a href="tel:+11111111111" class="ye-btn-call">111-222-3344</a>
                  </div>
              </div>
          </div>
        </section>



        <section class="ye-section-grande">
            <section class="ye-section-residentielle">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h2 data-aos="fade-right">Extermination</h2>
                            <h2 data-aos="fade-right" data-aos-delay="200"><span>résidentielle & commerciale</span></h2>
                            <p data-aos="fade-up" data-aos-delay="400">Iste voluptas facere quae corporis accusamus suscipit sequi facilis sapiente. Vel expedita exercitationem est, nam neque non totam soluta! Quaerat.</p>
                            <p data-aos="fade-up" data-aos-delay="600">Rem optio consequuntur voluptatibus doloribus? Laboriosam animi aperiam aut facere tenetur? Saepe tenetur blanditiis, laborum porro reprehenderit error repellat atque deserunt molestias dolor inventore quibusdam nemo quidem sint quam perferendis commodi officia omnis nulla dolorum. Blanditiis at veniam alias totam. Blanditiis dolores, itaque sint neque voluptatibus sapiente nesciunt commodi.</p>
                            <a href="/services" class="ye-btn-rouge" data-aos="zoom-in-up" data-aos-delay="600">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ye-section-service-gestion">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-sm-7">
                            <h2 data-aos="fade-up" data-aos-delay="200">Services de gestion</h2>
                            <h2 data-aos="fade-up" data-aos-delay="400">parasitaire <span>fiables et efficaces</span></h2>
                            <p data-aos="fade-up" data-aos-delay="600">Ab eius quod praesentium quibusdam voluptas tempore rerum, itaque voluptate qui sequi dolores maxime, nisi odio id. Ut excepturi nemo corporis sapiente a quibusdam temporibus laudantium minus dolor ad nobis omnis voluptates deleniti dignissimos quia, quae error voluptatibus!</p>
                            <p data-aos="fade-up" data-aos-delay="600">Quos corrupti qui perspiciatis, atque, odio, reiciendis unde fugiat corporis ullam alias quae voluptates rem voluptate sapiente asperiores. Vel enim voluptate saepe necessitatibus animi suscipit natus in.</p>
                            <p data-aos="fade-up" data-aos-delay="600">Voluptate exercitationem et repellat officiis mollitia nesciunt maxime aperiam. Magnam perferendis recusandae dicta tempore explicabo. Amet, tenetur molestias.</p>
                            <p data-aos="fade-up" data-aos-delay="600">Odio illo libero doloremque! Tempore vero quasi sequi corrupti quo repellat suscipit quisquam a optio sint!</p>
                            <p data-aos="fade-up" data-aos-delay="600"><a href="https://goo.gl/maps/aLJ9AZoRkUZh1MWn6" target="_blank">2900 Bd Édouard-Montpetit, Montréal, QC H3T 1J4</a></p>
                            <a href="/services" class="ye-btn-rouge" data-aos="zoom-in-up" data-aos-delay="600">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </section>
            
                
            <div class="container">
              <div class="animation-wrapper">
                  <img src="/assets/images/accueil/mouse.png" id="mouse-trap" alt="mouse-trap"/>
                  <img src="/assets/images/accueil/cheese.png" id="cheese-trap" alt="cheese-trap"/>
              </div>
            </div>

        </section>

        <section class="ye-visitez-boutique">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-9">
                        <h2>Pour vous procurer des produits efficaces</h2>
                        <h1>visitez Notre boutique</h1>
                        <p>Toujours à la fine pointe des avancées et des innovations dans le domaine parasitaire</p>
                    </div>

                    <div class="col-sm-3 pl-5 ye-section-call" data-aos="zoom-in">
                        <a href="/a-propos" class="ye-btn-call"> Nous trouver</a>
                    </div>
                </div>
            </div>

        </section>



        <section class="ye-obtenir-soumission" id="soumission">
            <div class="container ye-corr">
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
