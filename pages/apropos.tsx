import React from 'react';

import Page from '../layouts/page';
import { HEADER_PAGE } from '../components';
import TeamHelpWidget from '../components/teamHelpWidget';
import constants from '../constants';
import Emoji from '../uiComponents/emoji';

const About: React.FC = () => (
  <Page
    headerKey={HEADER_PAGE.ABOUT}
    title="A propos"
    description="Qu’est ce qu’une ressource du secteur public ? Quelle est la mission de ressourcerie.numericite.eu ? A qui s’adresse ce site ?"
    canonical={`https://ressourcerie.numericite.eu/apropos`}
  >
    <div className="text-wrapper text-style">
      <h1 className="layout-center">A propos de la ressourcerie</h1>
      <div>
        <h2>
          Qu’est-ce qu’une ressourcerie ?
        </h2>
        <p>
          Une ressourcerie numérique consiste à la mise en commun de solutions afin de faciliter le développement de services numériques. 
          Dans notre cas, les ressources partagées peuvent être des API, des algorithmes, des codes sources, et de la documentation. 
        </p>
        <p>
          La ressourcerie numérique permet à chaque agent public de la sphère travail de partager ses réalisations, 
          retours d’expériences et besoins avec la communauté data, IA et numérique du MTEI. Chacun peut contribuer aux projets en cours et réutiliser les outils développés.
        </p>
        <p>
          La ressourcerie est à la fois un lieu d’échange, une plateforme technique collaborative fondée sur l’open source et un moyen d’animer la communauté data, IA et numérique du MTEI. 
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="ressourcerie">
          This is a hidden anchor
        </a>
        <h2>
          Pourquoi une ressourcerie pour la sphère travail ?
        </h2>
        <p>
        Afin de construire des services numériques, les agents publics de la sphère travail (directions centrales, Pôle emploi, 
        écosystème de réutilisateurs) produisent de multiples travaux en matière de données, d’intelligence artificielle et de numérique plus généralement.
        </p>
        <p>
        Ces productions sont trop souvent laissées sur les étagères de chaque équipe, alors qu’un partage plus systématique permet  : 
        <ul>
          <li>D’éviter que plusieurs administrations développent plusieurs fois les mêmes briques technologiques</li>
          <li>De partager des réalisations auprès d’une communauté des réalisations pour qu’elles soient réutilisées voire améliorées</li>
        </ul>
        </p>
        <p>
        Par exemple, lorsque les équipes de la Direction générale du travail, avec l’accompagnement de la Fabrique numérique, 
        développent un module d’anonymisation de texte pour le service code du travail du numérique, 
        on peut imaginer que d’autres projets pourraient bénéficier de leur retour d’expérience (lien vers article Julien) et surtout réutiliser le code source du modèle de pseudonymisation.
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="concept">
          This is a hidden anchor
        </a>
        <h2>
        Comment a été conçu ce projet ?
        </h2>
        <p>
          Au cours des mois de mai à septembre 2021, la Direction du numérique des ministères sociaux a animé un travail de co-construction d’une {' '}
           <a
            target="blank"
            rel="noopener noreferrer"
            href="https://www.numerique.gouv.fr/uploads/feuillederoute_MTEI.pdf"
          >
             feuille de route data, IA et codes sources pour le compte du ministère du Travail, de l'Emploi et de l'Insertion.
          </a>{' '}
          Au cours des travaux, l’ensemble des acteurs ayant participé aux discussions ont identifié le besoin de partager davantage d’infrastructures et de méthodologies.
        </p>
        <p>
          Un groupe de travail s’est donc constitué, intitulé "Forge et communs numériques" afin d’accélérer ce chantier. Il est co-piloté par la Fabrique numérique des ministères sociaux 
          (Vincent Borgis) et Pôle emploi (Richard Ruot).
        </p>
        <p>
          Le groupe de travail “forge et communs numérique” a pour objectif de/d’ : 
          <ul>
            <li>Constituer une communauté en mettant en commun des cas d’usage, compétences et ressources (humains, logistiques, techniques et financiers) et identifier les ressources pivots et les personnes clés dans nos organisations;</li>
            <li>Outiller cette communauté numérique/IA de la sphère travail grâce à une plateforme technologique collaborative, fondée sur des approches open source,accessible à distance par la communauté numérique/IA du MTEI.</li>
            <li>Favoriser la coopération entre les projets via une structure de gouvernance et d’animation</li>
          </ul>
        </p>
        <p>
        La ressourcerie numérique s’inscrit donc dans cette perspective, et s’inspire de produits existants notamment : {' '}
        <a
            target="blank"
            rel="noopener noreferrer"
            href="https://code.etalab.gouv.fr/"
          >
            le répertoire des codes sources du service public d’Etalab, le catalogue des API de Pôle emploi.
          </a>
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="steps">
          This is a hidden anchor
        </a>
        <h2>
          Quelles sont les différentes étapes pour la ressourcerie ?
        </h2>
        <p>
        Notre priorité : identifier le maximum de ressources existantes afin de les référencer et vous permettre de les utiliser, en contactant leurs producteurs, en testant leur adaptation à votre projet. A termes, nous souhaitons industrialiser la détection et la valorisation des communs.
        En parallèle, nous souhaitons valoriser la communauté de contributeurs en recueillant des témoignages et des études de cas de réalisations.
        </p>
      </div>
      <div>
        <a className="hidden-anchor" id="info">
          This is a hidden anchor
        </a>
        <h2>
          Vous souhaitez obtenir plus d’informations sur le projet ou contribuer à la ressourcerie avec les communs numériques de vos équipes ?
        </h2>
        <p>
        Vous pouvez nous contacter : (adresse mail)
        </p>
        <p>
        Un formulaire de recensement des ressources sera bientôt disponible.
        </p>
      </div>
    </div>
    <style jsx>{`
      .text-wrapper > div {
        position: relative;
      }
      a.hidden-anchor {
        display: block;
        position: absolute;
        top: -80px;
        visibility: hidden;
      }
    `}</style>
  </Page>
);

export default About;
