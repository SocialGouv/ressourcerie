---
title: Api.gouv.fr
tagline: Accédez aux données de toutes les administrations, pour construire des services innovants
kind:
  - Catalogue
doc_tech_link:
doc_tech_external: https://api.gouv.fr/
producer: etalab
is_open: 1
themes:
  - Référentiel

keywords:
  - catalogue
  - API; données
---

Api.gouv.fr est le catalogue des API produites par les administrations centrales, les collectivités territoriales, les établissements publics…

Chaque API est associée à une courte description fonctionnelle, une documentation technique, les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des liens vers les services qui l'utilisent.

## Derniers déploiements

![Image](/images/guides/apigouvfr_1.png)
![Image](/images/guides/apigouvfr_2.png)

## Public visé

api.gouv.fr s'adresse avant tout aux créateurs de services, les consommateurs d'API. Pour cela, nous facilitons la découverte, la compréhension et l'accès aux API et à leurs producteurs.

Les fournisseurs, de leur côté, ont avec ce catalogue un moyen simple de faire connaître leurs API.

## Fournisseur d'API ? Envie de référencer une nouvelle API ?

[👉 Ajoutez votre API](https://api.gouv.fr/nouvelle-api) !

## Comment ça marche ?

### Prérequis

[Node.js](https://nodejs.org/en/) >= 16

### Serveur de développement

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1.Installer les dépendances

npm i

1.Variables d’environnement

Afin de configurer le projet correctement, il est conseillé de créer un fichier .env avec les variables d’environnement nécessaires à l’application.

.env permet de persister les variables d’environnement de développement dans un fichier plutôt que de les définir dans le shell, mais les deux fonctionnent. Cela fonctionne avec [dotenv](https://github.com/motdotla/dotenv) et [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv).

Copier le fichier de configuration

cp .env.sample .env

1.Lancer le serveur de développement

npm run dev

Par défaut, il écoutera sur le port 3000, pour changer, utiliser npm run dev -p 4242.

### Build de production

Cette application utilise [Next.js](https://github.com/zeit/next.js).

1.Installer les dépendances

npm i

1.Générer les bundles de production

npm run build

1.Lancer le serveur de production

PORT=3000 npm run start

### Preview apps

Chaque pull request est déployé dans des [review app](https://devcenter.heroku.com/articles/github-integration-review-apps) sur [Heroku](https://dashboard.heroku.com/)
