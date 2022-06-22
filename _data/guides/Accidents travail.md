---
title: Mieux prévenir les accidents du travail grâce aux données
tagline: La visualisation de données et l’intelligence artificielle au service des agents de contrôle des accidents du travail
tags: accident,travail,data
image: accident_travail.png
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
---

## Les accidents du travail en France

En 2020, plus de **540 000 accidents** du travail, dont 550 mortels, ont été recensés en France. Les accidents du travail sont donc une préoccupation de taille pour le ministère du Travail, de l'Emploi et de l'Insertion (MTEI).

Un accident du travail est, comme son nom l’indique, un événement soudain (à la différence d’une maladie professionnelle) ayant provoqué des dommages corporels ou psychologiques lors d’une activité professionnelle.

Lorsqu’une entreprise déclare un accident du travail, l'Inspection du travail et la caisse d’assurance retraite et de santé au travail (Carsat) analysent les causes de cet accident : chutes, effondrement du matériel, électrocution, accident de voiture, etc. Selon le degré d'implication de l'entreprise, il en résulte des incitations ou des mesures plus ou moins coercitives pour renforcer la sécurité des employés et éviter de nouveaux accidents.

Pour les entreprises, les salariés comme pour le MTEI, l’objectif est donc de réduire le nombre d’accidents du travail (AT) et leur gravité. Ainsi, une meilleure attributions des causes des AT est nécessaire pour mettre en place des actions ciblées visant à prévenir de futurs accidents.

**La difficile attribution des causes des accidents du travail**

Avant 2020, identifier des signaux d’alertes communs à un secteur ou une entreprise n’était pas une tâche aisée.

En effet, lorsqu’une entreprise déclare un accident du travail, elle explique les circonstances de l’accident sous texte libre dans un formulaire CERFA. Les agents de contrôle de l’inspection du travail attribuent ensuite une cause à chaque accident du travail.

Or, il n’existait pas de typologie standardisée des causes des accidents du travail. La même cause d’accident pouvait être qualifiée différemment en fonction de l’inspecteur chargé du dossier. D’autre part, la qualification des causes par les inspecteurs est une tâche fastidieuse et chronophage.

Enfin, les inspecteurs utilisaient les plateformes de la CPAM (Caisse primaire d’assurance maladie) mais consultaient également d’autres sites pour obtenir des informations sur les AT et les entreprises. La multiplication des plateformes ne facilitait pas la tâche des agents et il était extrêmement compliqué d’obtenir des informations précises sur la cause des accidents.

Il était donc difficile de prévenir les risques de manière ciblée.

**Un meilleur ciblage s’impose**

Au printemps 2020, la direction du numérique des ministères sociaux (DNUM) et la direction générale du travail ont donc entamé des travaux pour améliorer l’exploitation de la donnée concernant les accidents du travail. Le but est de simplifier l’exploitation des données, limiter l’utilisation de plusieurs plateformes et rendre ces données actionnables par les agents.

Pour faciliter la tâche de ciblage, les données sont croisées, regroupées et présentées sur un tableau de bord unique.

**Rassembler les données**

La première étape consistait donc à rassembler les données. Le bureau de valorisation des données (BVDD) de la DNUM s’est chargé de rassembler les différentes sources recensant les AT, qui sont : les déclarations d’AT par les entreprises, les signalements d’AT par les salariés, les AT mortels, le système d’informations Zonage (rattachement d’entreprises à des zones de contrôle de la direction générale du travail), la DSN (déclaration sociale nominative, qui regroupe les effectifs des entreprises et des administrations) et la base SIRENE (qui rassemble les données détenues par l’Insee sur les entreprises).

Le regroupement de ces sources de données, à la base silotées, permet de les valoriser et de les partager sous la forme d’un tableau de bord.

Le tableau de bord (créé via PowerBI) permet de restituer l’évolution des accidents de travail par type d’activité, par année et par type de causes (chutes, effondrement du matériel, électrocution, accident de voiture, etc). Il fait apparaître des taux de fréquence, permettant de comparer les écarts entre la moyenne régionale et nationale.

Les inspecteurs peuvent désormais voir l’évolution des accidents de travail passés pour en extraire des tendances et cibler les secteurs ou entreprises où des accidents du travail sont le plus susceptibles d’advenir. Cela permet aux agents en région de cibler puis contrôler les populations ou secteurs prioritaires.

**Qualifier automatiquement d’une cause les accidents du travail grâce à un algorithme d’intelligence artificielle**

Pour répondre au problème de la qualification des causes à partir des déclarations CERFA, le BVDD a par ailleurs mis en place un algorithme d’attribution des causes à partir de l’analyse des déclarations.

La difficulté technique réside dans les données, inscrites en texte libre, par une pluralité de déclarants. Ce type données est difficile à traiter automatiquement, et nécessite des techniques de traitement automatisé du langage (natural language processing en anglais). Pour ce faire, les causes d’AT ont été réduites à 12 et un modèle d’intelligence artificielle a été entraîné sur les données passées.

Les causes sont ensuite vérifiées manuellement par les agents. Le cas échéant, elles sont corrigées, ce qui permet d’améliorer le modèle d’intelligence artificielle.

**Des perspectives encourageantes **

Deux régions pilotes ont pu expérimenter le projet, la Bretagne et l’Auvergne Rhône Alpes.

L’algorithme de qualification des causes s’est constamment amélioré depuis son lancement : à son lancement à l’été 2021, il était capable de déterminer seulement 25% des causes d’accidents. En octobre 2021, son efficacité était de 79%, soit une identification correcte de 4 AT sur 5. L’algorithme continue à être amélioré.

La priorité : améliorer la qualité du ciblage grâce aux données présentées dans le tableau de bord. Cela suppose une hausse quantitative et qualitative des données brutes dont disposent les services.

L’autre préoccupation à moyen-long terme est de développer l’interpolation prédictive. En d’autres termes, il s’agit de se baser sur des données du passé pour identifier, puis potentiellement prédire, des périodes, des secteurs ou des entreprises susceptibles d’être à risque dans le futur.

Vous avez des idées ou des projets pour prévenir les accidents du travail ? N’hésitez pas à nous contacter !
