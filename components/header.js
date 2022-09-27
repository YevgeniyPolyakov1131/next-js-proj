import Link from 'next/link';

export default function Header({children, ...pageProps }) {
    return (      
        <header>
        <nav className="navbar navbar-expand-lg">        
            <a className="navbar-brand ye-logo" href="/">
                <img src="/assets/images/logo/logo-menu.png" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                <span className="navbar-toggler-icon"><img src="/assets/icons/bars.svg" alt="bars"/></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav justify-content-center">            
                    <li className={`nav-item ${pageProps.currentPage=="accueil" ? "ye-active" : ""}`} >
                        <a href="/" class="nav-link">Accueil </a>
                    </li>
                    <li className={`nav-item ${pageProps.currentPage=="exterminateur" ? "ye-active" : ""}`}>
                        <a href="/exterminateur" class="nav-link">Exterminateur</a>
                    </li>
                    <li className={`nav-item ${pageProps.currentPage=="boutique" ? "ye-active" : ""}`}>
                        <a class="nav-link" href="/boutique">Boutique</a>
                    </li>
                    <li className={`nav-item ${pageProps.currentPage=="services" ? "ye-active" : ""}`}>
                        <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li className={`nav-item ${pageProps.currentPage=="a-propos" ? "ye-active" : ""}`}>
                        <a class="nav-link" href="/a-propos">Nous joindre</a>
                    </li>
                    <li className={`nav-item ye-btn-soumission`}>
                        <a class="nav-link ye-ancre" href="#soumission">Obtenir une soumission</a>
                    </li>
                </ul>
    
            </div>
        </nav>
    
    
    </header>

    );
}