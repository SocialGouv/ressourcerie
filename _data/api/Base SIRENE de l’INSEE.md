---
title: Base SIRENE de l’INNSEE
tagline:
kind:
  - Jeu de données
doc_tech_link: https://github.com/SocialGouv/recherche-entreprises#:~:text=base
doc_tech_external: https://github.com/SocialGouv/recherche-entreprises#:~:text=base
producer: insee
is_open: -1
themes:
  - Statistiques
  - Autre

keywords:
  - jeu de données
  - Planning; jeu de données; datavisualisation
---

API de recherche d'entreprise basée sur ElasticSearch et exploitant les données de la [base SIRENE de l'INSEE](https://www.insee.fr/fr/information/3591226), de [plusieurs jeux de données data.gouv.fr](https://github.com/SocialGouv/recherche-entreprises/blob/master/assembly/scripts/get-data.sh) et de [kali-data](https://github.com/SocialGouv/kali-data) pour les conventions collectives.

Un frontend de démo est disponible ici : [https://recherche-entreprises.fabrique.social.gouv.fr](https://recherche-entreprises.fabrique.social.gouv.fr/)

Une API de démo est disponible sur [https://api.recherche-entreprises.fabrique.social.gouv.fr](https://api.recherche-entreprises.fabrique.social.gouv.fr/)

Les données sont mise à jour toutes les semaines

**Composants**

Le dépôt de code contient plusieurs composants utilisables indépendamment :

L'étape d'indexation peut être automatisée pour maintenir les données à jour en continu (ex: hebdomadaire).

**Fonctionnement**

![Image](/images/guides/_0.png)
