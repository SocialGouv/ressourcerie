---
title: Retirer des informations personnelles des documents administratifs
tagline: Ressources pour pseudonymiser et anonymiser des documents dans l’administration
tags: Anonymisation
image: pseudonymisation2.jpeg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
related_ressources:
  - Pseudonymiser des documents grâce à l'IA
  - Inventaire des modèles pré-entraînés d’apprentissage du Lab IA d'Etalab
related_guides:
  - Accords entreprise
---

Il est très courant d’avoir à rendre publics des documents administratifs qui contiennent des données personnelles. Pour protéger la vie privée des personnes mentionnées, il est nécessaire de retirer leurs informations personnelles (obligation prévue notamment à [l’article L.312-1-2](https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033205514&cidTexte=LEGITEXT000031366350&dateTexte=20161009) du Code des relations entre le public et l’administration).

Cela peut être effectué manuellement. Cependant, le processus est long et fastidieux. Des solutions existent pour automatiser complètement ou partiellement l’anonymisation ou la pseudonymisation des documents.

## Anonymiser ou pseudonymiser ses documents ?

**Tout d’abord, petit point de vocabulaire : **

**Anonymisation :** « L’anonymisation est un traitement qui consiste à utiliser un ensemble de techniques de manière à rendre impossible, en pratique, toute identification de la personne par quelque moyen que ce soit et ce de manière irréversible. »

[Guide de la CNIL sur l’anonymisation des données](https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data)

**Pseudonymisation :** « La pseudonymisation consiste à remplacer les données directement identifiantes (nom, prénom, etc.) d’un jeu de données par des données indirectement identifiantes (alias, numéro dans un classement, etc.). [...] En pratique, il est toutefois bien souvent possible de retrouver l’identité de ceux-ci grâce à des données tierces. C’est pourquoi des données pseudonymisées demeurent des données personnelles. L’opération de pseudonymisation est réversible, contrairement à l’anonymisation. »

[Guide d’Etalab, “Pseudonymiser des documents grâce à l’IA”](https://guides.etalab.gouv.fr/pseudonymisation/pourquoi-comment/#qu-est-ce-que-la-pseudonymisation)

Le processus d’anonymisation est irréversible et présente moins de risques de retrouver l’identité des personnes. En revanche, il entraîne une perte d’informations qui peut être un obstacle à la réutilisation des données.

Pour déterminer si vous devez anonymiser ou pseudonymiser vos documents, vous devez donc prendre en compte le cadre légal, les enjeux techniques et les usages à venir des données.

Pour en savoir plus :

- Voir [le guide d’Etalab sur la pseudonymisation des données](https://guides.etalab.gouv.fr/pseudonymisation/pourquoi-comment/#quelles-donnees-personnelles-dois-je-retirer-de-mes-donnees) qui présente un exemple concret de l’anonymisation ou de la pseudonymisation de la même base de données.
- Le guide d’Etalab donne également des conseils à destination des équipes projet, techniques et juridiques pour déterminer quelles informations retirer des documents et comment.

## Quels outils ?

### **Des outils d’annotation**

Généralement, le processus d’anonymisation ou de pseudonymisation n’est pas entièrement automatisé. On va avoir recours à des **outils d’annotation ou de pré-annotation **qui vont permettre aux agents en charge de l’anonymisation/de la pseudonymisation d’aller plus vite dans leur travail. La pré-annotation consiste ici à identifier toutes les données personnelles à anonymiser ou pseudonymiser. Souvent, les documents sont revérifiés par des agents pour s’assurer que le programme n’a pas laissé passer de données.

### **Moteurs de règles de gestion vs. intelligence artificielle**

Il y a deux manières d’automatiser l’annotation des documents.

- **Par des règles de gestion :** ce sont des règles déterminées avec les équipes métier. Par exemple : “quand un mot au milieu d’une phrase commence par une majuscule, alors c’est un nom propre (et il faut l’anonymiser)”. Ces règles sont ensuite implémentées par les équipes techniques dans un programme informatique. Cependant, il est parfois difficile de lister de manière exhaustive toutes les règles (et les exceptions) d’annotation. Par exemple, une adresse peut comporter un nom propre qui ne doit pas être anonymisé.
- **Par des méthodes d’intelligence artificielle :** les méthodes d’intelligence artificielle, quand elles sont bien utilisées, permettent d’améliorer la performance des systèmes. Dans ce cas, on donne à un programme informatique des documents déjà annotés (ce qu’on appelle une “base de données d’entraînement”). A partir de ces documents et par un processus d’essai-erreur (sous la supervision de _data scientists_, des spécialistes de la donnée), le programme va déduire lui-même les règles d’annotation. Ces règles pourront ensuite être appliquées à de nouveaux documents.

Pour en savoir plus sur la différence entre moteurs de règles et intelligence artificielle : [L’IA dans la sphère travail (1)](https://ressourcerie.fabrique.social.gouv.fr/articles/IA%20partie%201)

Guide sur les techniques de pseudonymisation (à destination de publics techniques) : [https://guides.etalab.gouv.fr/pseudonymisation/en-pratique/#formater-ses-donnees-annotees](https://guides.etalab.gouv.fr/pseudonymisation/en-pratique/#formater-ses-donnees-annotees)

## En pratique : des projets d’anonymisation et de pseudonymisation dans l’administration

Plusieurs administrations se sont déjà frottées à des projets d’anonymisation et de pseudonymisation. Avant de commencer votre projet, n’hésitez pas à solliciter des retours d’expérience des différentes équipes.

### 1.Le projet Accords d’entreprise

C’est le cas par exemple du projet “Accords d’entreprise” de la direction générale du travail et de la direction du numérique des ministères sociaux, qui, en s’appuyant sur des travaux du Commissariat général à l’énergie atomique et aux énergies alternatives, a développé un outil permettant d’annoter les accords d’entreprise pour que les agents puissent anonymiser les informations relatives aux représentants du personnel.

Voir l’article “Anonymiser les accords d’entreprise”

Ce projet en est à ses débuts : une évaluation de son efficacité sera bientôt effectuée par les équipes projet.

### 2.Pseudonymiser les décisions de justice

Certains projets proposent également déjà des briques mutualisées et de la documentation technique ouverte.

**OpenPseudo, un modèle open source mis à disposition par le lab IA d’Etalab**

Le Lab IA d’Etalab a développé un modèle de pseudonymisation qui peut être adapté à plusieurs types de documents. Dans le cadre du travail effectué avec le Conseil d’Etat, il a par exemple été entraîné sur des documents du Conseil d’Etat pour que l’outil soit adapté possible à la pseudonymisation desdits documents.

**Le modèle a permis d’améliorer les performances de 20% par rapport à un moteur de règles standard (\*\***[source](https://transformations-droit.com/webinaire-la-pseudonymisation-des-decisions-de-justice-travaux-du-lab-ia-avec)\***\*). **

[https://github.com/etalab-ia/pseudo_conseil_etat](https://github.com/etalab-ia/pseudo_conseil_etat)

Un webinaire qui présente ces travaux : [https://transformations-droit.com/webinaire-la-pseudonymisation-des-decisions-de-justice-travaux-du-lab-ia-avec](https://transformations-droit.com/webinaire-la-pseudonymisation-des-decisions-de-justice-travaux-du-lab-ia-avec)

**Les outils de la Cour de Cassation**

La Cour de Cassation devait répondre à des problématiques similaires. Elle a documenté son modèle d’annotation.

Documentation publique de la Cour de Cassation sur le sujet : [https://github.com/Cour-de-cassation/moteurNER](https://github.com/Cour-de-cassation/moteurNER)

### 3.Le guide du secret statistique de l’Insee

Une ressource utile sur l’anonymisation de données : [le guide du secret statistique de l’Insee](https://www.insee.fr/fr/information/1300624).

## Je veux lancer un projet d’anonymisation ou de pseudonymisation : que faire ?

- Rassemblez des acteurs pluridisciplinaires (expertise métier, chefferie de projet, technique, juridique)
- Explorez les ressources indiquées ci-dessus et contactez les équipes qui les ont créées
- Vous ne savez pas par où commencer ? Contactez-nous ([ressourcerie@numericite.eu](mailto:ressourcerie@numericite.eu)) !

## J’ai mené un projet d’anonymisation/de pseudonymisation dans la sphère travail : que faire ?

Nous voulons en savoir plus ! Vous voulez partager une ressource technique mutualisable ? Nous faire part de votre expérience ? Contactez-nous ([ressourcerie@numericite.eu](mailto:ressourcerie@numericite.eu)).
