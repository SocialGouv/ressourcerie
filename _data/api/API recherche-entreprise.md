---
title: API recherche-entreprise
tagline: API recherche entreprise permets aux administrations d’avoir des informations relatives aux entreprises en France.
kind:
  - API
doc_tech_link: https://api.gouv.fr/documentation/api-recherche-entreprises
doc_tech_external: https://github.com/SocialGouv/recherche-entreprises
producer: fabrique
is_open: 1
themes:
  - Référentiel

keywords:
  - api
  - entreprise
  - recherche
  - administrative
  - données
---

API de recherche d'entreprise basée sur ElasticSearch et exploitant les données de la base SIRENE de l'INSEE, de plusieurs jeux de données [data.gouv.fr](http://data.gouv.fr/) et de kali-data pour les conventions collectives.

Un frontend de démo est disponible ici : [https://recherche-entreprises.fabrique.social.gouv.fr](https://recherche-entreprises.fabrique.social.gouv.fr/)

Une API de démo est disponible sur [https://api.recherche-entreprises.fabrique.social.gouv.fr](https://api.recherche-entreprises.fabrique.social.gouv.fr/)

[https://github.com/socialgouv/recherche-entreprises](https://github.com/socialgouv/recherche-entreprises)

## Composants

Le dépôt de code contient plusieurs composants utilisables indépendamment :

L'étape d'indexation peut être automatisée pour maintenir les données à jour en continu (ex: hebdomadaire).

## Fonctionnement

![Image](/images/guides/API_recherche-entreprise_1.jpeg)

## Données :

## Développement

### Pré-requis

Pour lancer les différentes parties du projet, un certain nombre d'outil doivent être présent sur la machine:

- node
- yarn
- docker et docker-compose
- wget
- sqlite3

### Assemblage des données

Le script index/sqlite/build.sh permet de permet de télécharger les CSV puis aggréger les données pour les re-exporter dans CSV "plat". Le fichier ./data/assembly.csv généré fait +6Go avec plus de 30 millions de lignes.

Cette opération peut durer ~45 minutes selon votre setup

### Indexation dans Elastic Search

Cette étape permet de mettre à jour les données dans l'index Elasticsearch à partir du fichier assembly.csv généré à l'étape précédente.

La mise à jour exploite la fonctionnalité [alias](https://www.elastic.co/guide/en/elasticsearch/reference/7.16/aliases.html) d'Elasticsearch pour éviter les downtimes.

Pour lancer une indexation :

yarn
ELASTICSEARCH_URL=https://elastic_url:9200 ELASTICSEARCH_API_KEY=key_with_writing_rights ASSEMBLY_FILE=./data/assembly.csv yarn start

Le script scripts/create-es-keys.sh permet de créer des tokens pour lire/écrire sur ces index. **Cette étape n'est pas nécessaire pour le développement local.**

### Lancement de l'API

Cette étape permet de lancer l'API de démo qui va servir les requêtes jusqu'à Elasticsearch.

# En partant de la racine du projet

cd api

yarn install
yarn build

ELASTICSEARCH_URL=http://localhost:9200 yarn start

Le temps d'indexation est d'environ 1h.

### Wokflows GitHub

Des workflows GitHub permettent de mettre à jour les index et sont lancés manuellement

### Projets relatifs

- Annuaire-entreprises : [https://annuaire-entreprises.data.gouv.fr](https://annuaire-entreprises.data.gouv.fr/)
- API Entreprise : [https://entreprise.api.gouv.fr/catalogue/](https://entreprise.api.gouv.fr/catalogue/)
