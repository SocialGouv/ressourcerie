---
title: Anonymiser les accords d’entreprise
tagline: Comment la DGT et la DNUM ont développé un outil d’anonymisation à destination des DREETS
tags: Anonymissation, algorithme
image: arbre.jpeg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

### Face aux erreurs ou oublis d’anonymisation dans les accords d’entreprise, la DGT (direction générale du travail) et la direction du numérique des ministères sociaux ont développé un outil d’annotation basé sur des techniques d’intelligence artificielle.

## **Qu’est ce qu’un accord d’entreprise ?**

Un accord d’entreprise est un texte signé chaque année entre la direction d’une entreprise et les représentants des salariés. Ce texte fixe les règles relatives à la rémunération, au temps de travail et au partage de la valeur ajoutée. Une fois le texte signé, les accords d’entreprises doivent être déposés auprès des DREETS (Les Directions régionales de l’économie, de l’emploi, du travail et des solidarités) avant d’être publiés sur [Légifrance](https://www.legifrance.gouv.fr/). En 2021, plus de 87000 accords d’entreprise ont été publiés.

## **Problème d’anonymisation**

Au sein d’un accord entreprise, pour protéger les données des négociateurs et des signataires, il est de mise d’ôter les mentions contenant les informations sur leur identité. Il est donc question d’anonymisation, c’est à dire empêcher l’identification de ces personnes. Pourtant, il arrive bien souvent que les accords d’entreprise soient mal (voire pas) anonymisés. Cela peut être à cause d’erreurs humaines d’inattention ou de l’utilisation de techniques d’anonymisation obsolètes. Par exemple : surligner les informations sur les personnes de la même couleur que le texte, ce qui fait que les données restent visibles lorsqu’elles sont publiées sous format pdf. Les agents des DREETS doivent donc identifier manuellement les oublis des entreprises pour les corriger avant publication. Malgré cela, des données personnelles sont parfois involontairement publiés sur le site de Légifrance.

## **La solution numérique**

Pour palier ce problème, l’objectif a donc été de créer un système capable d’identifier les informations personnelles qui doivent être anonymisées. Ainsi, la DGT, en lien avec la direction du numérique des ministères sociaux, ont conçu un outil d’annotation en se basant sur une API conçue pour le CEA (Commissariat à l'énergie atomique et aux énergies alternatives). Celui-ci permet aux agents de déposer les accords d’entreprise dans une interface en ligne. Une API identifie ensuite les données personnelles qui auraient échappé à l’anonymisation par les entreprises et les annote, proposant ainsi une pré-vérification d’anonymisation aux agents des DREETS qui s’occupent de la vérification finale. Il ne s’agit pas donc pas d’une anonymisation automatique : le but n’est pas de remplacer le contrôle humain, mais d’ôter une tâche fastidieuse à ces agents chargés de corriger et de publier les accords d’entreprise.

## **Un paramétrage ingénieux**

Toutefois, un obstacle pernicieux est à éviter. De fait, les accords d’entreprise contiennent bon nombre de noms de rues, renseignant sur la localisation du siège social, qui ne doivent pas être anonymisées. Cet outil a donc été pensé pour identifier spécifiquement les données personnelles (ici : prénom, nom) sans proposer l’anonymisation de l’intégralité des noms propres.

Ainsi, l’outil permet non seulement de limiter fortement le taux d’erreurs, mais offre également un gain de temps et une baisse de pénibilité considérables aux agents chargés de publier les accords d’entreprise, en leur permettant de traiter 1500 contrats en moins de 5 secondes.

## **Une implémentation à suivre**

L’outil en est à ses débuts. Il est prévu d’évaluer son utilisation en contexte et de travailler sur son appropriation par les agents pour décider de la suite du projet et de son éventuelle adaptation à d’autres usages.

Ainsi, l’outil présente plusieurs avantages. Il permet d’abord de faciliter le travail des agents en les aidant à analyser plus rapidement plusieurs accords d’entreprise. Il permet aussi de réduire la pénibilité du travail des agents en leur permettant de faire l’économie de la lecture d’une partie substantielle des accords d’entreprise soumis.
