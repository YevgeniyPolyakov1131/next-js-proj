import Head from 'next/head';
import Layout from '../components/layout';
import JotformSoumission from '../components/jotform-soumission';

// sections
import SecAssociations from '../components/sec-associations';
import DivContacts from '../components/div-contacts';

export default function Boutique() {
    return (
      <Layout currentPage="boutique">
        <Head>
          <title>Boutique</title>
          <meta name="description" content="Votre description"></meta>
        </Head>
  
        <main>
  
        <section class="ye-banner-top-gen">
            <div class="container"> 
                <div class="row">
                    <div class="col-sm-8 ye-description-container">
                        <h1>Boutique</h1>
                        <h3>des produits qui fonctionnent réellement!</h3>
                    </div>
                </div>
            </div> 
        </section>


        <section class="ye-section-sous-banner">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-7 ye-section-sous-banner-container">
                        <h1 data-aos="fade-up" data-aos-delay="400">Boutique d'Extermination - <span>Tous nos Produits Répulsifs</span></h1>
                        <p data-aos="fade-up" data-aos-delay="600">Recusandae aspernatur dolores nulla esse praesentium! Adipisci molestias, quia tempore accusantium reiciendis quod iste nulla expedita mollitia quos maxime voluptatibus ex illum. Dolores delectus est quas, possimus amet illum alias qui eveniet magni corrupti accusamus inventore unde quod enim facere sequi fugit optio?</p>
                        <div class="ye-boutons-container">
                            <a href="/services" class="ye-btn-rouge" data-aos="zoom-in-up">Nos services</a>
                            <a href="/boutique" class="ye-btn-noir" data-aos="zoom-in-up">La boutique</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>

        <section class="ye-plusieur-service">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7">
                        <h1 data-aos="fade-right">DES CONSEILS JUDICIEUX <br/><span>DE SPÉCIALISTES</span></h1>
                        <p data-aos="fade-up">Placeat nostrum facilis earum necessitatibus adipisci, tempore ratione, consequatur itaque laudantium incidunt, asperiores atque voluptatum voluptatibus quas sunt animi non explicabo dolore? Consequuntur ad magnam delectus voluptatem eveniet veritatis, natus nisi possimus dolorum.</p>
                    </div>
                </div>
            </div>

        </section>

        <section class="ye-plusieur-service ye-produit-certifie">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-sm-6">
                        <h1 data-aos="fade-left">Des produits d'extermination <span>certifiés par santé Canada</span></h1>
                        <p data-aos="fade-up">Minus cupiditate est natus, atque ipsa quod iste aperiam molestiae sapiente laborum quo totam, illo suscipit, dolor aliquam.</p>
                        <p data-aos="fade-up">Hic, repellendus sapiente voluptatum tenetur sint illum veniam! Deleniti, suscipit consequatur labore adipisci nesciunt voluptate error vitae fugiat repellendus magnam iure, esse unde necessitatibus. Libero, optio voluptatum.</p>
                        <a href="/boutique" class="ye-btn-rouge" data-aos="zoom-in-up">Voir la boutique</a>
                    </div>                

                </div>

            </div>

        </section>

        <section class="ye-visitez-boutique" data-aos="fade-up">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-9">
                        <h2>Pour vous procurer des produits efficaces</h2>
                        <h1>visitez Notre boutique</h1>
                        <p>Toujours à la fine pointe des avancées et des innovations dans le domaine parasitaire</p>
                    </div>

                    <div class="col-sm-3 pl-5 ye-section-call">
                        <a href="https://goo.gl/maps/aLJ9AZoRkUZh1MWn6" target="_blank" class="ye-btn-call"> Nous trouver</a>
                    </div>                
                </div>

            </div>
        </section>

        <section class="ye-services-identification">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-sm-6">
                        <h1 data-aos="fade-left">Services d'identification</h1>
                        <h1 data-aos="fade-left" data-aos-delay="200"><span>et conseils adapté a vos besoins</span></h1>
                        <p data-aos="fade-up">Vitae consequatur amet corrupti, beatae odit iure officiis aspernatur ipsum, veritatis consectetur iste numquam animi provident dolores quas nesciunt officia nisi culpa! Doloribus esse amet suscipit molestiae nam. Repellat, veritatis suscipit dicta, sed, veniam accusantium labore quod vitae blanditiis accusamus magnam pariatur porro corporis. Unde doloremque non impedit, repudiandae beatae asperiores!</p>
                        <p data-aos="fade-up">Deserunt voluptatum in laboriosam asperiores excepturi aliquam velit saepe explicabo perspiciatis ex, illum reprehenderit culpa. Sapiente.</p>
                        <p data-aos="fade-up">Laborum quo hic maxime! Nam distinctio et consectetur rerum odio repellat!</p>
                        <p data-aos="fade-up">Repudiandae eos obcaecati tempora commodi minus sed dolor quos deserunt, velit sapiente sequi delectus? Nam, magni.</p>
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
  