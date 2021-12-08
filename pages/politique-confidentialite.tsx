import React from 'react';

import Page from '../layouts/page';

const About: React.FC = () => (
  <Page usePreFooter={false} title="Politique de confidentialité">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Politique de confidentalité</h1>
      <div>
        <h2>Traitement des données à caractère personnel</h2>
        <p>La présente plateforme « RESSOURCERIE » est développée au sein de l’incubateur de la Fabrique numérique des ministères sociaux.</p>
        <p>Le responsable de traitement est « Pôle Emploi », représentée par Monsieur Jean Bassères, Directeur général.</p>

        <h2>Finalités</h2>
        <p>L’outil numérique peut collecter des données à caractère personnel afin de ressourcer les produits des agents publics de la sphère travail, et notamment pour les finalités suivantes :
            <ul>
                <li>Éviter le développement par plusieurs administrations de mêmes briques  technologiques ;</li>
                <li>Partager des réalisations auprès d’une communauté des réalisations pour qu’elles soient réutilisées voire améliorées.</li>
            </ul>
        </p>

        <h2>Données à caractère personnel traitées</h2>
        <p>La plateforme peut collecter les données à caractère personnel suivantes :
            <ul>
                <li>Données de contact (adresse e-mail)</li>
                <li>Données du champ libre de contact ;</li>
                <li>Données d’hébergeur ou de connexion ;</li>
                <li>Cookies.</li>
            </ul>
        </p>

        <h2>Bases juridiques des traitements de données</h2>
        <p>Les données traitées à l’occasion de ces traitements ont plusieurs fondements juridiques :
            <ul>
                <li>L’obligation légale à laquelle est soumise le responsable de traitements au sens de l’article 6-c du RGPD ;</li>
                <li>L’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement au sens de l’article 6-e du RPGD ;</li>
            </ul>
        </p>

        <h2>Ces fondements sont précisés ci-dessous :</h2>
        <h3>a. Données de contact</h3>
        <p>Ce traitement est nécessaire à l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement au sens de l’article 6-e du règlement (UE) 2016/679 du
        Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p>

        <h3>b. Données du champ libre de contact</h3>
        <p>Ce traitement est nécessaire à l’exécution d’une mission d’intérêt public ou relevant de l’exercice de l’autorité publique dont est investi le responsable de traitement au sens de l’article 6-e du règlement (UE) 2016/679 du
        Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p>

        <h3>c. Données de connexion</h3>
        <p>Ce traitement est nécessaire au respect d'une obligation légale à laquelle le responsable de traitement est soumis au sens de l'article 6-c du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif
        à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p>
        <p>L'obligation légale est posée par la loi LCEN n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique et par les articles 1 et 3 du décret n°2011-219 du 25 février 2011.</p>

        <h3>d. Cookies</h3>
        <p>En application de l’article 5(3) de la directive 2002/58/CE modifiée concernant le traitement des données à caractère personnel et la protection de la vie privée dans le secteur des communications électroniques, transposée à l’article 82 de la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, les traceurs ou cookies suivent deux régimes distincts.</p>
        <p>Les cookies strictement nécessaires au service ou ayant pour finalité exclusive de faciliter la communication par voie électronique sont dispensés de consentement préalable au titre de l’article 82 de la loi n°78-17 du 6 janvier 1978. </p>
        <p>Les cookies n’étant pas strictement nécessaires au service ou n’ayant pas pour finalité exclusive de faciliter la communication par voie électronique doivent être consenti par l’utilisateur.</p>
        <p>Ce consentement de la personne concernée pour une ou plusieurs finalités spécifiques constitue une base légale au sens du RGPD et doit être entendu au sens de l'article 6-a du Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données.</p>
        
        <h2>Durée de conservation</h2>
        <table>
            <thead>
                <tr>
                    <th>Types de données</th>
                    <th>Durée de conservation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Données de contact</td>
                    <td>2 ans à compter de la dernière réponse ou utilisation du site ou dès la demande de suppression de la liste de contact ou de l’opposition de la personne.</td>
                </tr>
                <tr>
                    <td>Données relatives au champ libre de contact</td>
                    <td>2 ans à compter de la dernière réponse ou utilisation du site ou dès la demande de suppression de la liste de contact ou de l’opposition de la personne.</td>
                </tr>
                <tr>
                    <td>Données d’hébergeur </td>
                    <td>1 an, conformément au décret n°2011-219 du 25 février 2011.</td>
                </tr>
                <tr>
                    <td>Cookies</td>
                    <td>Dans un délai de 13 mois, conformément aux recommandations de la CNIL</td>
                </tr>
            </tbody>
        </table>
        

        <h2>Droit des personnes concernées</h2>
        <p>Vous disposez des droits suivants concernant vos données à caractère personnel :
            <ul>
                <li>Droit d’information et droit d’accès aux données</li>
                <li>Droit d’opposition au traitement de données ;</li>
                <li>Droit de rectification des données</li>
            </ul>
        </p>
        <p>Pour les exercer, faites-nous parvenir une demande en précisant la date et l’heure précise de la requête – ces éléments sont indispensables pour nous permettre de retrouver votre recherche – par voie électronique à l’adresse suivante : contact@numericite.eu</p>
        <p>Par voie postale : <br />
        Direction du Numérique <br />
        Ministère des solidarités et de la santé <br />
        39-43 Quai André Citroën <br />
        75739 Paris Cedex 15
        </p>
        <p>
        En raison de l’obligation de sécurité et de confidentialité dans le traitement des données à caractère personnel qui incombe au responsable de traitement, votre demande ne sera traitée que si vous apportez la preuve de votre identité. <br />
        Pour vous aider dans votre démarche, vous trouverez <a href="https://www.cnil.fr/fr/modele/courrier/exercer-son-droit-dacces">ici</a> un modèle de courrier élaboré par la CNIL.<br />
        Le responsable de traitement s’engage à répondre dans un délai raisonnable qui ne saurait dépasser 1 mois à compter de la réception de votre demande.
        </p>

        <h2>Destinataires des données</h2>
        <p>Le responsable de traitement s’engage à ce que les données à caractères personnels soient traitées par les seules personnes autorisées.</p>

        <h2>Sécurité et confidentialité des données</h2>
        <p>Les mesures techniques et organisationnelles de sécurité adoptées pour assurer la confidentialité, l’intégrité et protéger l’accès des données sont notamment : 
            <ul>
                <li>Anonymisation </li>
                <li>Stockage des données en base de données</li>
                <li>Stockage des mots de passe en base sont hachés</li>
                <li>Cloisonnement des données</li>
                <li>Mesures de traçabilité</li>
                <li>Surveillance</li>
                <li>Protection contre les virus, malwares et logiciels espions</li>
                <li>Protection des réseaux</li>
                <li>Sauvegarde</li>
                <li>Mesures restrictives limitant l’accès physiques aux données à caractère personnel</li>
            </ul>
        </p>

        <h2>Sous-traitants</h2>
        <p>Certaines des données sont envoyées à des sous-traitants pour réaliser certaines missions. Le responsable de traitement s'est assuré de la mise en œuvre par ses sous-traitants de garanties adéquates et du respect de conditions strictes de confidentialité, d’usage et de protection des données.</p>
        <h2>Durée de conservation</h2>
        <table>
            <thead>
                <tr>
                    <th>Partenaire</th>
                    <th>Pays destinataire</th>
                    <th>Traitement réalisé</th>
                    <th>Garanties</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Microsoft Azure</td>
                    <td>France</td>
                    <td>Hébergement</td>
                    <td>https://privacy.microsoft.com/fr-fr/privacystatement</td>
                </tr>
            </tbody>
        </table>


      </div>
    </div>
  </Page>
);

export default About;
