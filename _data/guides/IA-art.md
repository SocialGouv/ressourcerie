---
title: L’IA dans la sphère travail (1)
tagline: 1.L’IA et les algorithmes dans la sphère travail, de quoi parle-t-on ?
tags: IA, algorithme
image: meta.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

_Cet article est le premier d’un feuilleton sur les algorithmes et l’intelligence artificielle dans la sphère travail. Aujourd’hui, nous nous intéressons aux concepts de bases des algorithmes et de l’intelligence artificielle._

" La donnée et l’intelligence artificielle (IA) sont amenées à prendre de plus en plus de place dans la
transformation du monde du travail. "

> > Elisabeth Borne, ministre du Travail, de l’Emploi et de l’Insertion, dans <External href='https://www.data.gouv.fr/fr/datasets/feuilles-de-route-ministerielles-sur-la-politique-de-la-donnee-des-algorithmes-et-des-codes-sources/#'>la feuille de route du ministère sur les données, les codes sources et les algorithmes</External> (septembre 2021).

“Algorithmes”, “intelligence artificielle” : on entend de plus en plus parler de ces concepts dans le secteur public et notamment dans la sphère travail. Que signifient-ils vraiment ? Quelles opportunités offrent-ils ? Quels enjeux soulèvent-ils ? Depuis quand sont-ils présents dans l’administration ? Dans le premier article de notre feuilleton, nous vous donnons quelques éléments de définition et de contexte.

## Qu’est-ce qu’un algorithme ?

Plusieurs définitions existent pour expliquer le concept d’« algorithme » (voir par exemple celle de la <External href='https://www.cnil.fr/fr/definition/algorithme'>CNIL</External>). **Très simplement, un algorithme est une suite d’étapes qui permet d’arriver à un résultat… comme une recette de cuisine.**

Commençons par rassembler nos ingrédients. Dans le monde du numérique, il s’agit de « données », c’est-à-dire des éléments tels que des chiffres, du texte, des images, etc.. Mixons le tout numériquement en suivant la recette (la suite d’étapes). Nous obtenons ainsi notre plat : le résultat. Beaucoup de choses peuvent ainsi être considérées comme des algorithmes.

Le <External href='https://guides.etalab.gouv.fr/algorithmes/guide/#_1-a-quoi-servent-les-algorithmes-publics'>guide en ligne d’Etalab sur le sujet</External> donne des exemples d’usages d’algorithmes.

<Centered>
![Guide en ligne Etalab](/images/guides/etalab.png)
</Centered>
> > _Capture d'écran du guide en ligne d'ETALAB_

## Les algorithmes, des outils présents depuis plus de cinquante ans dans l’administration

Comme le rappelle <External href='https://www.etalab.gouv.fr/'>Etalab</External> (le département de la direction interministérielle du numérique en charge de la politique des données de l’État) dans un <External href='https://www.dailymotion.com/video/x7uqnv9'>webinaire</External> sur la transparence des algorithmes publics, l’administration française a recours à des algorithmes depuis plusieurs décennies. L’automatisation du calcul des impôts remonte aux années 1950-1960.

Si les algorithmes sont présents dans la sphère publique depuis longtemps, le sujet est remis sur le devant de la scène par l’arrivée de nouvelles techniques algorithmiques : aux algorithmes “classiques”, aussi appelés “systèmes de règles”, s’ajoutent les techniques algorithmiques d’”intelligence artificielle”, telles que l’apprentissage automatique (machine learning) et l’apprentissage profond (deep learning).

## Systèmes de règles, machine learning, deep learning : les différents types d’algorithmes

> **Les systèmes de règles**

Les algorithmes utilisés historiquement dans l’administration (comme celui du calcul des impôts ou des allocations) sont ceux qui **appliquent des règles établies par les humains qui sont ensuite transcrites en langage informatique**. On les appelle des “systèmes de règles”.

Dans l’administration, il s’agit notamment de règles présentes dans les textes législatifs et réglementaires. Par exemple, les règles de calcul des impôts sont fixées chaque année par le Parlement.

L’épisode 2 de ce feuilleton détaillera un exemple de système de règles dans la sphère travail : le calcul de l’aide au retour à l’emploi.

**Il existe ensuite des algorithmes qui, dans le langage commun, se distinguent des systèmes de règles : les algorithmes d’intelligence artificielle.**

> **Les algorithmes d’intelligence artificielle**

Tout comme le terme “algorithmes”, celui d’“intelligence artificielle” est plus ancien qu’on ne le croit : sa première utilisation date de 1956 (voir le rapport <External href='https://www.aiforhumanity.fr/pdfs/9782111457089_Rapport_Villani_accessible.pdf'>“Donner un sens à l’intelligence artificielle”</External> de la mission Villani, mars 2018). Il englobe toutes sortes de techniques mathématiques qui servent à reproduire la manière dont les humains raisonnent. En théorie, donc, il recouvre aussi les systèmes de règles dont nous parlons plus haut.

Cependant, il est maintenant employé de manière courante pour parler d’algorithmes spécifiques : ceux qui reposent sur **l’apprentissage automatique (machine learning en anglais)**. En réalité, l’apprentissage automatique est un sous-ensemble de l’intelligence artificielle, mais les deux termes sont souvent confondus dans le débat public.

<Centered>
![Guide en ligne Etalab](/images/guides/diagramme_openia.png)
</Centered>
> > _<External href='https://openclassrooms.com/fr/courses/6417031-objectif-ia-initiez-vous-a-lintelligence-artificielle/6823506-apprehendez-le-deep-learning-ou-lapprentissage-profond'>Diagramme issu du cours “Open AI”</External> de Benjamin Ejzenberg et Anna Choury, disponible sur le site OpenClassrooms.fr, <External href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr'>licence CC BY-SA 4.0.</External>_

> **L’apprentissage automatique (machine learning)**

Contrairement aux systèmes de règles, les algorithmes d’apprentissage automatique ne sont pas programmés pour effectuer une tâche en suivant des étapes prédéfinies par des humains, mais pour définir eux-mêmes les étapes nécessaires pour effectuer cette tâche, à partir de données qui leurs sont fournies.

L’apprentissage (ou entraînement) est ce qui va permettre de construire l’algorithme. Les data scientists donnent à l’algorithme beaucoup de données à analyser, et l’algorithme utilise ces données à l’aide de méthodes statistiques et de sciences des données pour apprendre et déduire les règles lui-même.

**Ce sont les techniques de machine learning qui vont permettre de faire des prédictions (usage n°3 dans le tableau d’Etalab). Dans la sphère travail, on trouve par exemple l’outil “La Bonne Boîte”, qui permet d’identifier les entreprises susceptibles d’embaucher dans les 6 prochains mois. Le fonctionnement de cet outil sera détaillé dans un prochain article.**

Cette méthode, qui a désormais une dizaine d’années, a été rendue possible par l’augmentation des données disponibles et de la puissance de calcul des ordinateurs. Son efficacité repose en grande partie (mais pas uniquement) sur la quantité et la qualité des données fournies “en entrée”.

> **Deep learning**

On entend également souvent parler de deep learning (apprentissage profond) : c’est une sous-catégorie du machine learning et l’une des méthodes d’intelligence artificielle les plus avancées techniquement. L’architecture des techniques d’apprentissage profond est inspirée du cerveau humain.

Ces techniques permettent d’analyser les données “non-structurées” (tout ce qui n’est pas des données chiffrées, comme les images, les textes, les sons, etc.) de manière plus efficace que les techniques de machine learning traditionnelles. C’est grâce à ces techniques que le traitement du langage a pu énormément progresser ces dernières années : les traducteurs automatiques sont maintenant bien plus performants qu’il y a une décennie.
En revanche, pour obtenir de bons résultats, le deep learning a besoin d’encore plus de données que le machine learning, ce qui pose des difficultés car il est rare de trouver des gros jeux de données d’une bonne qualité.

_Dans la suite de ce feuilleton, nous observerons des cas concrets d’utilisation de chaque type d’algorithme dans la sphère travail_

Vous menez un projet algorithmique ou d’IA dans la sphère travail ? Vous cherchez des ressources pour en commencer un ? N’hésitez pas à nous le faire savoir !

## En savoir plus…

> - Rapport de la CNIL : <External href='https://www.cnil.fr/sites/default/files/atoms/files/cnil_rapport_garder_la_main_web.pdf'>"Comment permettre à l'Homme de garder la main ? Les enjeux éthiques des algorithmes et de l'intelligence artificielle"</External>, décembre 2017
> - Rapport de la mission parlementaire menée par le député Cédric Villani : <External href='https://www.aiforhumanity.fr/pdfs/9782111457089_Rapport_Villani_accessible.pdf'>Donner un sens à l’intelligence artificielle : pour une stratégie nationale et européenne, mars 2018</External>
> - Le site de la <External href='https://www.intelligence-artificielle.gouv.fr/fr'>stratégie nationale pour l’intelligence artificielle</External>
> - <External href='https://www.data.gouv.fr/fr/datasets/feuilles-de-route-ministerielles-sur-la-politique-de-la-donnee-des-algorithmes-et-des-codes-sources/#'>La feuille de route ministérielle 2021-2023 des données, des algorithmes et des codes sources du ministère du Travail, de l’Emploi et de l’Insertion</External>, septembre 2021.
> - <External href='https://ressourcerie.fabrique.social.gouv.fr/articles/publicode-art'>Découvrez Publicodes</External>, un langage pour construire des simulateurs et des outils de calcul à partir de textes légaux.
> - <External href='https://openclassrooms.com/fr/courses/6417031-objectif-ia-initiez-vous-a-lintelligence-artificielle/6822571-evaluez-limpact-de-lintelligence-artificielle-sur-le-travail'>Le cours en ligne gratuit “Open IA”</External>, pour s’initier aux notions de l’intelligence artificielle.
> - <External href='https://guides.etalab.gouv.fr/algorithmes/'>Les ressources d’Etalab (guide et webinaires)</External> sur la mise en œuvre des obligations de transparence et de redevabilité relatives aux algorithmes publics.
