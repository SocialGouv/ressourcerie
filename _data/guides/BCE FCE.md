---
title: FCE et BCE, deux outils de partage d’informations sur les entreprises
tagline: Simplifier le quotidien des agents grâce aux données des entreprises
tags: travail,data,fraude,base de données,DNUM
image: istockphoto-1311598658-612x612.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

La plateforme Base Commune Entreprise (BCE) a été mise en oeuvre à la suite de Fiche Commune Entreprise (FCE) pour répondre aux besoins de ciblage des agents en régions. Mais en quoi consistent ces deux portails ?

En 2019, la Mission de la transformation numérique de la DNUM a créé le portail Fiche Commune Entreprise (FCE) pour faciliter l’accès aux informations disponibles sur les entreprises et ses échanges avec l’administration. Le succès de ce portail a amené ses créateurs à développer une plateforme de stockage de données, Base commune entreprise (BCE), afin de répondre aux nouveaux besoins de ciblage.

## **Problème de communication **

Dans le cadre de leur mission, les agents des services déconcentrés veillent à ce que chaque entreprise respecte différentes normes imposées par l’Etat (temps de travail, congés, sécurité...) et vérifient qu’aucune d’entre elles ne se trouve en difficulté. Ils se rendent donc régulièrement sur place pour effectuer des contrôles.

**Cependant, il arrive que des agents interviennent de manière désynchronisée.** Par exemple, un agent intervient pour contrôler le bon respect de la durée légale du travail, tandis qu’un autre agent s’assure de l’application des règles liées à la concurrence.

Ce problème s’explique en partie par le fonctionnement vertical des services. Les agents ne sont pas toujours tenus au courant des contrôles effectués ou des aides attribuées par leurs collègues au sein d’autres services. Il arrive encore trop souvent que l’interlocuteur en entreprise informe un agent de la DREETS de la venue prochaine de son collègue.

**S’ajoute à cela le fait que les agents manquent d’outils permettant d’avoir une vision globale d’une entreprise et de sa relation avec l’administration. **

Ainsi, en 2019, suite à un prototype initié par la DREETS Occitanie visant à réduire la complexité administrative à laquelle sont confrontés les agents, **la DNUM a mis en place la Fiche commune entreprise (FCE)**. L’objectif est de fournir aux agents des fiches synthétisant toutes les informations sur les entreprises.

![Image](/images/guides/BCE_FCE_1.png)
Page d’accueil de la plateforme FCE

## La FCE facilite le travail des agents

**La **[start-up d’Etat](https://www.associations.gouv.fr/qu-est-ce-qu-une-start-up-d-etat-l-exemple-de-beta-gouv-fr.html) **Fiche commune entreprise est un portail ouvert à l’ensemble des agents du MTEI. Ce portail facilite l’accès et le partage de l’information. **Il regroupe, sous forme de fiche, l’ensemble des informations légales, juridiques ainsi qu’un historique des dernières actions menées par les services des DREETS et Ddets-PP (directions départementales de la cohésion sociale et de la protection des populations) pour chaque entreprise.

Le portail web FCE offre donc une vue à 360° de l’entreprise en agrégeant les données publiques sur son activité ainsi que les informations sur les différents services ayant eu des interactions avec l’entreprise.

**Les agents peuvent ainsi rapidement identifier les services ayant récemment interagi avec l’entreprise et orienter utilement leurs demandes pour compléter leurs actions de contrôle. **Cet outil incite les agents à casser les silos de chacun des services pour intégrer plus de transversalité dans leurs actions.

En parallèle, FCE pourrait, à terme, être amenée à remplacer [societe.com](http://societe.com/), du moins pour les agents du MTEI. En effet, certains ont pris l’habitude de consulter societe.com pour rechercher toutes les informations publiques d’une entreprise. Or, ce site privé recense des données publiques et agit également en qualité de régie publicitaire. FCE représente donc une alternative très intéressante pour ces agents.

## Lutte contre la fraude

Au delà de l’objectif de transversalité entre les services de la DGT, **la plateforme permet de croiser les informations déclaratives des entreprises avec les données liées aux demandes d’aides afin de détecter d’éventuelles tentatives de fraudes.**

Les fiches synthétiques peuvent être transmises à un décideur (préfet ou ministre) pour l’éclairer sur une décision à prendre. Il récupère alors des indicateurs synthétiques lui permettant de comprendre la “santé” d’une entreprise.

Parmi les informations recensées, on retrouve la date d’ouverture de la société, l’historique des effectifs en équivalent temps plein, le capital social, les dirigeants et mandataires sociaux, la déclaration sociale nominative (DSN), la synthèse de l’ensemble des visites et contrôles (date et unité de contrôle), les demandes d’activité partielle ou encore les accidents du travail.

> "Démocratique, la donnée améliore le service public en interconnectant la puissance publique et l'usager"

Mission Bothorel, Pour une politique publique de la donnée, décembre 2020

## Fonctionnement et débuts de la plateforme

Les FCE sont alimentées par les sources de données suivantes : la base de l’INSEE, la base SIREN, la DNUM via la DARES, ACOSS et la DGT via le SI D@ccord. A défaut d’avoir des API disponibles pour regrouper ses sources de données, les producteurs déposent périodiquement leurs extractions de données dans une base de données. Ces données sont ensuite traitées pour venir alimenter les fiches entreprises.

Comme évoqué plus haut, un prototype simplifié de FCE a été initié par la DREETS Occitanie début 2018. Afin de généraliser l’utilisation de cet outil à l’ensemble des DREETS, il a été décidé de poursuivre son développement au sein de la [Fabrique numérique des ministères sociaux](https://www.fabrique.social.gouv.fr/). **Aujourd’hui le portail est utilisé à l’échelle nationale. **

**Cependant, l’absence de filtre rend impossible le ciblage** (par exemple, la recherche d’entreprises, d’un département en particulier, n’ayant pas été contrôlées depuis plus de 6 mois). Il est donc devenu nécessaire d’avoir une base incluant les données de FCE mais permettant de filtrer sur les interactions entre DGT et entreprises.

## La BCE : une plateforme pour développer le ciblage

La Base Commune Entreprise (BCE) a donc vu le jour. Il s’agit d’un espace de stockage utilisant les données de FCE, doté d’un système de synchronisation (appelé ETL pour Extract - Transform - Load), d’une base de données et d’une API. Aujourd’hui, la BCE est alimentée par les données de FCE (par les extractions). Mais à terme, BCE sera alimentée par les différentes sources de données et viendra alimenter FCE via une API.

**La base de données, l’API et l’espace de stockage alimentent des tableaux de bord, essentiels pour le développement du ciblage.** En plus d’améliorer la lutte contre la fraude, le ciblage permet de s’assurer de la santé d’un secteur ou encore de prévenir certains des problèmes internes comme les accidents du travail.

Ces tableaux de bord vont permettre de rendre compte de la santé d’un secteur dans un espace donné. Par exemple, grâce à BCE, on peut évaluer l’impact qu’à eu la crise sanitaire sur le secteur de la restauration en Corse grâce à la visualisation de l’évolution du nombre d’employés.

## Opportunité : Mise en qualité des données

En voulant partager les données, il arrive que des agents découvrent des problèmes sur leur qualité. Si on prend le cas des effectifs, il y a les DSN qui permettent d’évaluer le nombre de salariés à 22 millions, mais avec les effectifs du répertoire commun des déclarants (RCD) on découvre, sur certaine période, des défauts de 8 millions de personnes : la comparaison entre les deux sources de données permettent de mettre le RCD en qualité. Lorsqu’une anomalie est détectée, elle est donc mise à jour dans le catalogue des données.

L’objectif est également de développer un indicateur sur la qualité des données. En attendant, les tableaux de bord servent, entre autres, à identifier des incohérences dans certains jeux de données afin de les corriger.

## **Ressource et mutualisation**

Ce système, au-delà de nourrir les tableaux de bord, simplifie la mise en place de start-up utilisant de la data. C’est d’ailleurs à partir des données présentes sur la BCE, que sont alimentées les start-ups d’Etat [Code du travail Numérique](https://ressourcerie.fabrique.social.gouv.fr/articles/code_travail_numerique) et Signaux Faibles (un projet interministériel qui s’appuie sur les données pour détecter le plus rapidement possible les entreprises fragiles financièrement, et ainsi mieux les accompagner).

Vous utilisez ou souhaitez également utiliser les données de FCE ? N’hésitez pas à nous le faire savoir en écrivant à l’équipe de la Ressourcerie : ressourcerie@fabrique.social.gouv.fr !
