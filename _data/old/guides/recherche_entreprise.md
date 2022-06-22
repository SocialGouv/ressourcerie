---
title: Une API, quatre produits
tagline: L'exemple de la mutualisation de l'API recherche-entreprises
tags: Anonymissation, algorithme
image: bibliotheque.jpeg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

Les API offrent de formidables opportunités de mutualisation dans différents produits. Aujourd’hui, zoom sur l’API recherche-entreprises, initialement développée par l’équipe du Code du travail numérique et désormais également utilisée par trois autres équipes de la sphère travail.

## L’API recherche-entreprises en bref

L’API recherche-entreprises permet de retrouver les données publiques détenues par l’administration sur une entreprise ou une association (notamment les données contenues dans un extrait KBIS), à travers la base SIREN de l’Insee.

Pour comprendre comment elle fonctionne, l’équipe a mis à disposition [un démonstrateur en ligne](https://recherche-entreprises.fabrique.social.gouv.fr/). En pratique, je peux trouver une entreprise par nom, numéro de SIREN ou numéro de SIRET. J’obtiens également un lien pour consulter la fiche de l’entreprise sur le site annuaire-entreprises.data.gouv.fr.

![Capture d’écran 2022-04-07 à 20.30.20.png](/images/guides/recherche_entreprise1.png)

Mais alors, quelle est la différence entre cette API et Annuaire-entreprises ? Les deux outils poursuivent le même objectif : retrouver les informations principales sur une entreprise. Mais le site Annuaire-entreprises est fait pour que des humains cherchent des informations. L’API recherche-entreprises est, comme son nom l’indique, une [API](https://ressourcerie.fabrique.social.gouv.fr/articles/api-definition), et elle permet à un ordinateur de récupérer automatiquement ces informations.

En pratique, les outils sont donc complémentaires.

## L’API recherche-entreprises dans le Code du travail numérique

L’équipe du Code du travail numérique a développé cette API pour l’utiliser dans plusieurs outils, par exemple celui de recherche de convention collective. En un clic, un employeur ou un salarié peut savoir quelle est la convention collective de son entreprise en indiquant simplement le nom de son entreprise, ou son numéro de SIRET.

![Capture d’écran 2022-04-07 à 20.31.25.png](/images/guides/recherche_enterprise2.png)

Le moteur de recherche a été amélioré au fil du temps : par exemple, les personnes travaillant pour des marques ayant plusieurs magasins (comme les marques de vêtements) avaient des difficultés à trouver la convention collective correspondant à leur magasin. C’est désormais facilité, en faisant une recherche par nom d’entreprise et code postal.

L’équipe du Code du travail numérique travaille en open source. Elle a donc rendu l’API publique sur GitHub (une plateforme de partage de codes sources pour développeurs et développeuses), ce qui permet son utilisation par d’autres projets.

## Une utilité dans toute la sphère travail

En pratique, beaucoup de projets ont besoin de rechercher automatiquement des informations dans la base SIREN de l’Insee. Ainsi, trois autres équipes l’utilisent maintenant dans leurs produits : [EgaPro](https://index-egapro.travail.gouv.fr/) (l’outil de calcul et de déclaration de l’index égalité professionnelle Femmes-Hommes des entreprises), [Fiche Commune Entreprise](https://fce.fabrique.social.gouv.fr/home) (qui permet aux agents publics de mutualiser leurs connaissances sur les entreprises), et [Mon-entreprise](https://mon-entreprise.urssaf.fr/) (l’outil de l’URSSAF pour aider les entrepreneurs à développer leur activité).

Grâce aux développements réalisés par l’équipe du Code du travail numérique, chaque équipe a pu ainsi économiser plusieurs heures de développement, et peut également contribuer à améliorer l’API au fur et à mesure.

L’équipe est actuellement en lien avec la DARES pour compléter les données avec les entreprises manquantes.

## Ressources

Vous utilisez aussi l’API recherche-entreprises ? Vous dirigez un projet et cette API pourrait vous intéresser ? N’hésitez pas à nous le faire savoir (ressourcerie@numericite.eu) !

Côté tech : découvrez l’API et accédez au code source sur la fiche ressource associée.
