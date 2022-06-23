---
title: Intégrer et traiter automatiquement des données sur les entreprises dans mon produit
tagline: Les API pour récupérer les données publiques sur les entreprises et leurs différents usages
tags: IA, algorithme
image: recherche_entreprise.jpeg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
related_ressources:
  - API recherche-entreprise
  - API Entreprise
  - API Sirene
  - API Convention collectives
  - Liste des codes NAF
related_guides:
  - Recherche entreprise
  - API définition
---

Responsable technique, développeuse, développeur, vous travaillez sur un projet numérique dans l’administration à destination de personnes salariées, de syndicats, d’entreprises, ou d’autres administrations et vous avez besoin d’exploiter les données disponibles sur les entreprises françaises ? Des outils techniques sont à votre disposition pour vous faciliter la vie ! Découvrez ce qui vous convient le mieux en fonction de vos besoins.

## Les données détenues par l’administration française sur les entreprises

L’administration française collecte et traite beaucoup d’informations sur les entreprises.

**Une partie est disponible à tout le monde,** notamment les données contenues dans la base SIRENE de l’Insee (numéro de SIRET, date de création de l’entreprise, siège social, etc.). Une version géocodée de cette base est également disponible. Ce sont ces données qui sont disponibles dans les extraits KBIS des entreprises.

Sont également disponibles par exemple [la liste des conventions collectives](https://www.data.gouv.fr/fr/datasets/liste-des-conventions-collectives-par-entreprise-siret/#_) associées à chaque entreprise.

▶️  Voir une liste de toutes les données ouvertes dans la catégorie “Ressources” de cette page.

**D’autres informations ne sont disponibles que pour un partage interne entre différents services de l’administration.** Par exemple, des informations financières et des données fiscales (DGFiP), des données concernant l’URSSAF ou l’INPI (voir une liste détaillée d’un grand nombre de ces données [ici](https://entreprise.api.gouv.fr/catalogue/)). L’accès à ces données par d’autres administrations est clairement encadré et dépend entre autres de l’utilisation qui va en être faite.

## Des API, pour récupérer automatique ces informations : quelques cas d’usages

Les [API](https://ressourcerie.fabrique.social.gouv.fr/articles/api-definition) développées par les services de l’administration vont vous permettre de récupérer les informations automatiquement et de les utiliser dans un projet numérique. Les cas d’usages sont extrêmement nombreux. Par exemple :

- [Faciliter l’accès des personnes salariées à leurs conventions collectives](https://code.travail.gouv.fr/outils/convention-collective) en cherchant simplement le nom de leur entreprise dans un moteur de recherche
- Pré-remplir et personnaliser des [formulaires](https://entreprise.api.gouv.fr/use_cases/preremplissage/)
- [Faciliter la candidature aux marchés publics](https://entreprise.api.gouv.fr/use_cases/marches_publics/#ils-utilisent-lapi-entreprise) et leur instruction

En résumé, vous pouvez, grâce aux API, rendre votre service public plus simple à utiliser pour tout le monde : pour les usagers qui doivent effectuer des démarches comme pour les agents qui doivent traiter ces démarches ou implémenter des processus métier.

Différents services de l’administration ont développé des API qui peuvent être utilisées pour récupérer ces informations et les utiliser dans un projet numérique. Utiliser une API existante va vous permettre d’économiser des heures de développement. Vous pouvez même contribuer à améliorer l’outil, dans une démarche de mutualisation des ressources.

**Le choix de votre API va dépendre de l’utilisateur-cible de votre outils.**

## Je développe un produit pour des administrations : l’API Entreprise

L’API Entreprise permet de récupérer toutes les informations détenues sur les entreprises, y compris celles réservées à un usage interne à l’administration.

Pour avoir accès à ces données par l’intermédiaire de l’API, vous devez demander une habilitation à travers l’outil [Datapass](https://api.gouv.fr/les-api/api-entreprise/demande-acces).

C’est sur cette API que reposent les cas d’usages “formulaires” et “marchés publics” mentionnés ci-dessus.

## Je développe un produit pour des personnes hors de l’administration : l’API Recherche Entreprise

L’API Recherche Entreprise permet de récupérer un nombre réduit de catégories de données, mais, à la différence de l’API Entreprise, elle est utilisable par des acteurs externes à l’administration et pour des usagers du service public.

C’est cette API qui permet à toute personne salariée de trouver facilement sa convention collective (cas d’usage mentionné ci-dessus).

▶️  Vous pouvez découvrir cette API avec [une démo visuelle en ligne](https://recherche-entreprises.fabrique.social.gouv.fr/) ainsi qu’une [API de démonstration](https://api.recherche-entreprises.fabrique.social.gouv.fr/).

▶️  Vous pouvez découvrir l’histoire de cette API dans un article de la Ressourcerie.

## Je veux intégrer ces API à mon produit

Rendez-vous sur les pages Ressource correspondantes (indiquées à gauche de cet article) et suivez la procédure d’utilisation des Ressources !
