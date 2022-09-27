export default function Copyrights({children, ...pageProps }) {
    return (      
        <h3>© { new Date().getFullYear() } Tous droits réservés </h3> 
    );
}
