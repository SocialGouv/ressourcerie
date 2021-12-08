import React from 'react';

import Page from '../layouts/page';

const About: React.FC = () => (
  <Page usePreFooter={false} title="Conditions générales d'utilisation">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Conditions générales d'utilisation</h1>
      <div>
          <p>Les présentes conditions générales d’utilisation (dites « CGU ») fixent le cadre juridique de la Plateforme “Ressourcerie”
               et définissent les conditions d’accès et d’utilisation des services par l’Utilisateur.</p>

        <h2>Article 1 - Champ d’application</h2>
        <p>
        Toute personne souhaitant avoir accès aux travaux réalisés par les agents publics de la sphère travail.
        </p>

        <h2>Article 2 – Objet</h2>
        <p>La plateforme Ressourcerie a pour objet de ressourcer les produits des agents publics de la sphère travail.</p>

        <h2>Article 3 – Définitions</h2>
        <p>
        « L'Utilisateur » est toute personne cherchant à obtenir plus d’informations sur le projet ou contribuer à la Ressourcerie avec les communs numériques produites. </p>
        <p>Les « Services » sont les fonctionnalités offertes par la plateforme pour répondre à ses finalités. </p>
        <p>« Le responsable de traitement » est la personne qui, au sens de l’article 4 du règlement (UE) n°2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données détermine les finalités et les moyens des traitements de données à caractère personnel.
        </p>

        <h2>Article 4 - Fonctionnalités</h2>
        <p>L’Utilisateur peut naviguer et prendre connaissance des ressources numériques de la sphère travail. En outre, tout Utilisateur peut entrer en contact avec l’équipe de la Ressourcerie, et notamment poser toute question qu’il estime pertinente et permettant d’améliorer la collecte d’informations et de ressources communes.</p>

        <h2>Article 5 - Responsabilités </h2>
        <h3>5.1 L’éditeur de la « Plateforme Ressourcerie »</h3>
        <p>Les sources des informations diffusées sur la Plateforme sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions.</p>
        <p>L’éditeur s’autorise à suspendre ou révoquer n'importe quel compte et toutes les actions réalisées par ce biais, s’il estime que l’usage réalisé du service porte préjudice à son image ou ne correspond pas aux exigences de sécurité.</p>
        <p>L’éditeur s’engage à la sécurisation de la Plateforme, notamment en prenant toutes les mesures nécessaires permettant de garantir la sécurité et la confidentialité des informations fournies.</p>
        <p>L’éditeur fournit les moyens nécessaires et raisonnables pour assurer un accès continu, sans contrepartie financière, à la Plateforme. Il se réserve la liberté de faire évoluer, de modifier ou de suspendre, sans préavis, la plateforme pour des raisons de maintenance ou pour tout autre motif jugé nécessaire.</p>

        <h3>5.2 L’Utilisateur</h3>
        <p>Toute information transmise par l'Utilisateur est de sa seule responsabilité. Il est rappelé que toute personne procédant à une fausse déclaration pour elle-même ou pour autrui s’expose, notamment, aux sanctions prévues à l’article 441-1 du code pénal, prévoyant des peines pouvant aller jusqu’à trois ans d’emprisonnement et 45 000 euros d’amende.</p>
        <p>L'Utilisateur s'engage à ne pas mettre en ligne de contenus ou informations contraires aux dispositions légales et réglementaires en vigueur. En particulier, l’Utilisateur s’engage à ne pas publier dans le champ libre de question, de message racistes, sexistes, injurieux, insultants ou contraires à l’ordre public.</p>
        <p>Toute question ou propos peut être supprimé s’il est redondant, s’il contrevient à une disposition des présentes CGU, s’il est contraire à des dispositions légales ou pour n’importe quelle raison jugée opportune par l’équipe de la plateforme, et ce, sans préavis.</p>

        <h2>Article 6 - Mise à jour des conditions d’utilisation</h2>
        <p>Les termes des présentes conditions d’utilisation peuvent être amendés à tout moment, sans préavis, en fonction des modifications apportées à la plateforme, de l’évolution de la législation ou pour tout autre motif jugé nécessaire.</p>

      </div>
    </div>
  </Page>
);

export default About;
