import Head from 'next/head';
import Layout from '../components/layout';
import JotformSoumission from '../components/jotform-soumission';


export default function Merci() {
    return (
      <Layout currentPage="accueil">
        <Head>
          <title>Merci</title>
          <meta name="description" content="Votre description"></meta>
        </Head>
  
        <main>
  
        <section class="ye-merci">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-10 text-center">
                        <h3></h3>
                        <h2 data-aos="zoom-in-up">Merci de nous avoir écrit, nous vous répondrons dès que possible</h2>
                    </div>
                </div>
            </div>

        </section>
  
  
      </main>
  
  
  
      </Layout>
    )
  }
  