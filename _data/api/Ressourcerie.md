---
title: Ressourcerie
tagline: La ressourcerie catalogue les communs produits par et pour la sphère travail.
kind:
  - Catalogue
doc_tech_link: https://github.com/SocialGouv/ressourcerie
doc_tech_external: https://ressourcerie.fabrique.social.gouv.fr/
producer: ministere-travail
is_open: 1
themes:
  - Autre
keywords:
  - catalogue
  - sphere travail
---

La Ressourcerie catalogue les communs produits par et pour la sphère travail. Chaque ressource est associée à une courte description fonctionnelle, une documentation technique, les modalités d'accès, d'éventuelles ressources supplémentaires et surtout des liens vers les services qui l'utilisent.

Elle propose également des articles qui présentent des projets ou des portraits au sein de la sphère travail.

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
