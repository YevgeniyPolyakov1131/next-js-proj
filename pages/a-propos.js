import Head from 'next/head';
import Layout from '../components/layout';
import JotformSoumission from '../components/jotform-soumission';

// sections
import SecAssociations from '../components/sec-associations';
import DivContacts from '../components/div-contacts';

export default function aPropos() {
    return (
      <Layout currentPage="a-propos">
        <Head>
          <title>Contact</title>
          <meta name="description" content="Votre description"></meta>
        </Head>
  
        <main>
  
        <section class="ye-banner-top-gen">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 ye-description-container">
                        <h1>Contact</h1>
                        <h3>SPÉCIALISTES EN GESTION PARASITAIRE</h3>
                    </div>
                </div>
            </div> 
        </section>


        <section class="ye-obtenir-soumission ye-p-a-propos" id="soumission">
            <div class="container ye-corr">
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-5 ye-formulaire" data-aos="fade-right" data-aos-delay="1000">
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

                    <div class="col-sm-5">

                    </div>

                </div>

            </div>

        </section>

        <SecAssociations></SecAssociations>
  
  
      </main>
  
  
  
      </Layout>
    )
  }
  