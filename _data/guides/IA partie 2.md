---
title: L’IA dans la sphère travail (2)
tagline: 2. Les systèmes de règles, les exemples du calcul des allocations de retour à l’emploi et du simulateur
tags: IA,algorithme
image: meta.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

_Cet article est le deuxième d’un feuilleton sur les algorithmes et l’intelligence artificielle dans la sphère travail. Après un premier article sur les différents types d’algorithmes et leur histoire dans l’administration, nous nous penchons maintenant sur des exemples de système de règles dans la sphère travail et sur la transformation du code juridique en code informatique._

Comme vu dans l’article précédent, les systèmes de règles sont les outils qui implémentent des règles définies par des humains. Parmi eux, on trouve beaucoup d’algorithmes de calculs d’allocations, donc celle d’aide au retour à l’emploi.

## **Les systèmes de règles, du fichier Excel au logiciel ad hoc**

Un système de règles n’a même pas besoin d’être numérique, du moment qu’il s’agit d’une suite d’étapes qui donne un résultat à partir de données en entrée : des instructions suivies de manière constante écrites sur un simple bout de papier pourraient faire l’affaire.

- **Dans les faits, il est plus courant que les processus soient faits de manière au moins partiellement informatisée, notamment pour éliminer le risque d’erreur de calcul, par exemple.**

Il existe différentes manières d’implémenter ces règles de manière informatique, via un logiciel développé spécialement ou même une feuille de calcul Excel contenant des formules.

## **L’exemple du calculateur de l’âge de départ à la retraite**

Un exemple de système de règles développé spécialement est celui du calculateur de date de préavis de départ ou de mise à la retraite d’une personne salariée proposé aux personnes employeures par le service public [“Code du travail numérique”](https://code.travail.gouv.fr/outils/preavis-retraite). Ce calculateur s’appuie sur Publicodes, un langage créé spécialement pour développer des simulateurs qui implémentent le code juridique en code informatique. Cela permet de donner des explications simples aux personnes utilisant le calculateur (voir capture d’écran ci-dessous).

![Image](/images/guides/IA_partie_2_1.png)
![Image](/images/guides/IA_partie_2_2.png)

## **L’exemple du calcul de l’allocation d’aide au retour à l’emploi**

Pôle emploi utilise un certain nombre d’algorithmes pour calculer automatiquement l’allocation de certaines aides. Parmi elles, celle d’aide au retour à l’emploi (ARE) que touchent certaines personnes en recherche d’emploi.

Pôle emploi met à disposition un [document qui explique les règles de cet algorithme](https://www.pole-emploi.fr/candidat/algorithmes.html).

![Image](/images/guides/IA_partie_2_3.png)

Comme le rappelle Pôle emploi (voir capture d’écran), les règles d’allocation sont détaillées dans la réglementation de l’assurance chômage. Elles ont été “traduites” dans un langage informatique. Une personne demandeuse d’emploi renseigne un certain nombre d’informations dans son dossier de demande. Des algorithmes utilisent ces données pour vérifier automatiquement l’éligibilité de la personne à l’ARE et calculer le montant et la durée de l’allocation perçue. Ici, il s’agit d’un système de règles car des humains connaissent et ont programmé les règles applicables.

## **Bien transformer la loi en code informatique**

Les systèmes de règles sont souvent considérés comme simples, mais ils ne sont pas sans écueil : les deux exemples présentés ci-dessus concernent des algorithmes qui implémentent des règles présentes dans des textes de loi. Ce n’est pas le cas de tous les systèmes de règles de l’administration. Cependant, ce n’est pas rare, et c’est une spécificité importante à prendre en compte : si la réglementation d’une allocation ou d’un autre type de calcul est définie dans des textes, ou doit l’être, il est important de s’assurer que les règles présentes dans la loi sont les mêmes que celles implémentées par l’algorithme.

Prenons l’exemple de la durée du préavis de départ à la retraite présenté plus haut : le code du travail prévoit un préavis de deux mois pour le profil que nous avons décrit. En cas de réforme de la loi, si la durée du préavis évolue (par exemple à six mois), le calculateur devra être mis à jour pour prendre cela en compte. Dans le cas contraire, le calcul sera erroné. “Code is law” : le code fait loi. C’est pour cela que les algorithmes du secteur public doivent être le plus transparents possibles, pour permettre de vérifier la concordance des textes et du code informatique.

## **Pour aller plus loin**

Vous menez un projet algorithmique ou d’IA dans la sphère travail ? Vous cherchez des ressources pour en commencer un ? N’hésitez pas à nous le faire savoir !

_Maintenant que nous avons abordé les systèmes de règles et leurs enjeux, nous nous tournerons dans l’épisode suivant vers l’apprentissage automatique._

_Conformément aux obligations légales de transparence et d’explicabilité auxquelles sont tenues les administrations utilisant des algorithmes pour prendre des décisions administratives individuelles._

Ressources à consulter :

- Découvrir plus en détail le projet Publicodes
- Lire le guide d’Etalab présentant le cadre légal de la [transparence des algorithmes publics](https://guides.etalab.gouv.fr/algorithmes/guide/#_3-le-cadre-juridique-applicable)
