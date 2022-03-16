import constants from '../../constants';

const Footer = () => {
  return (
    <footer className="fr-footer" role="contentinfo">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
          <a href="/" title="Retour à l’accueil">
            <p className="fr-logo">
                MINISTÈRE
                <br />
                DU TRAVAIL,
                <br />
                DE L'EMPLOI
                <br />
                ET DE L'INSERTION
            </p>
            </a>
          </div>
          <div className="fr-footer__content">
            <p className="fr-footer__content-desc">
              Créée en 2021, la ressourcerie est une initiative réalisée dans le cadre de la Feuille de route du ministère pour une politique publique de la donnée, des algorithmes et des codes sources.
            </p>
            <div className="public-partners">
              <br />
              partenaires&nbsp;:
            </div>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://travail-emploi.gouv.fr/"
                >
                  travail-emploi.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://www.legifrance.gouv.fr    /"
                >
                  www.legifrance.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://service-public.fr"
                >
                  service-public.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://www.gouvernement.fr"
                >
                  www.gouvernement.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://www.france.fr/"
                >
                  www.france.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/mentions-legales">
                Mentions Légales
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/cgu">
                CGU
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link"
                href="/politique-confidentialite">
                Politique de confidentialité
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/contact/">
                Nous contacter
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a className="fr-footer__bottom-link" href="/stats/">
                Statistiques
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <style jsx>{`
        .footer__social {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;
          margin-left: 40px;
        }
        .fr-footer .footer__social a {
          margin-right: 1rem;
        }
        .fr-footer .fr-footer__brand a:before {
          display: none;
        }
        .fr-footer .footer__social .icon {
          width: 20px;
          height: 20px;
        }
        .public-partners {
          font-variant: small-caps;
          color: ${constants.colors.darkGrey};
          font-weight: bold;
          width: 100%;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;