import React from 'react';

import Page from '../layouts/page';

const About: React.FC = () => (
  <Page usePreFooter={false} title="Mentions légales">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Mentions légales</h1>
      <div>
        <h2>Éditeur</h2>
        <p>
          Ce site est édité au sein de l’incubateur de la Fabrique numérique des
          ministères sociaux par la Direction du numérique des ministères
          sociaux :
        </p>
        <p>
          Tour Mirabeau
          <br />
          39-43 Quai André Citroën
          <br />
          75015 Paris
          <br />
          Téléphone : 01 40 56 60 00
        </p>

        <h2>Directeur de la publication</h2>
        <p>
          Madame Anne JeanJean, Directrice du numérique des ministères sociaux.
        </p>

        <h2>Hébergement du site</h2>
        <p>
          Ce site est hébergé par : <br />
          [http://www.ovh.com](http://www.ovh.com/) OVH SAS
          <br />
          Siège social : 2 rue Kellermann - 59100 Roubaix - France. <br />
        </p>

        <h2>Accessibilité</h2>
        <p>
          La conformité aux normes d’accessibilité numérique est un objectif
          ultérieur mais nous tâchons de rendre ce site accessible à toutes et à
          tous.
        </p>

        <h2>Signaler un dysfonctionnement</h2>
        <p>
          Si vous rencontrez un défaut d’accessibilité vous empêchant d’accéder
          à un contenu ou une fonctionnalité du site, merci de nous en faire
          part.
        </p>
        <p>
          Si vous n’obtenez pas de réponse rapide de notre part, vous êtes en
          droit de faire parvenir vos doléances ou une demande de saisine au
          Défenseur des droits.
        </p>
        <p>
          En savoir plus : <br />
          Pour en savoir plus sur la politique d’accessibilité numérique de
          l’État : 
          <a href="http://references.modernisation.gouv.fr/accessibilite-numerique">
            http://references.modernisation.gouv.fr/accessibilite-numerique
          </a>
        </p>

        <h2>Sécurité</h2>
        <p>
          Le site est protégé par un certificat électronique, matérialisé pour
          la grande majorité des navigateurs par un cadenas. Cette protection
          participe à la confidentialité des échanges.
        </p>
        <p>
          En aucun cas les services associés à la plateforme ne seront à
          l’origine d’envoi de courriels pour demander la saisie d’informations
          personnelles.
        </p>
      </div>
    </div>
  </Page>
);

export default About;
