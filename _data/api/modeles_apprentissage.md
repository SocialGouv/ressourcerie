---
title: Inventaire des modèles pré-entraînés d’apprentissage du Lab IA d'Etalab
tagline: Ce jeux de données recense les différents algorithmes entrainés à date par le Lab IA dans le cadre du développement de ses outils mutualisés
producer: lab-ia
category: Public
is_open: 1 # -1 means API not open
account_link: https://pole-emploi.io/inscription
external_site: https://www.data.gouv.fr/fr/datasets/inventaire-des-modeles-pre-entraines-dapprentissage-du-lab-ia-detalab/
partners:
  - lab-ia
keywords:
  - Ressourcerie
contact_link: contact@numericite.eu
doc_tech_external: https://www.data.gouv.fr/fr/datasets/inventaire-des-modeles-pre-entraines-dapprentissage-du-lab-ia-detalab/
themes:
  - Emploi
kind:
  - jeu de données
from: lab-ia
visits_2019: 1000
last_update: 02/08/2021
---

### A quoi sert ce jeu de données ?

Inventaire des modèles pré-entraînés d’apprentissage du Lab IA d'Etalab

La publication de l'inventaire des modèles pré-entraînés d'apprentissage automatique (machine learning) fait partie des actions de la feuille de route du Ministère de la Transformation et de la Fonction Publique (voir p.25 du document téléchargeable ici ).

Ce jeux de données recense les différents algorithmes entrainés à date par le Lab IA dans le cadre du développement de ses outils mutualisés (plus d'informations sur la page dédiée du Lab IA).

Détails de ce que contient l'inventaire

Pour chaque algorithme, la colonne "lien_model_card" renseigne un lien qui permet d'accéder à une description de l'algorithme. Nous avons suivi la trame de description des modèles présentée dans le papier "Model Cards for Model Reporting" de Margaret Mitchell & al (téléchargeable ici).
La colonne "lien_depot_github" renvoie vers le dépôt GitHub contenant le code qui a permis d'entraîner l'algorithme. La colonne "modele_entraine_ouvert" a pour valeur "non" si le modèle entrainé n'est pas ouvert et vaut "oui" si le modèle entraîné est ouvert. Dans ce dernier cas, le lien vers le modèle entraîné est renseigné dans la colonne "lien_modele_entraine_si_pertinent". La colonne "date_derniere_mise_a_jour" renseigne la date de dernière mise à jour du modèle.
