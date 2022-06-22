---
title: Métiers recherchés
tagline: Accéder aux activités professionnelles (2 maximum) recherchées présente dans le profil du demandeur sur www.pôle-emploi.fr
producer: pole-emploi
category: Public
is_open: 0 # -1 means API not open
account_link: https://pole-emploi.io/inscription
external_site: https://pole-emploi.io/data/api/pole-emploi-connect/metiers-recherches?tabgroup-api=documentation&doc-section=api-doc-section-caracteristiques
partners:
  - Pôle emploi
keywords:
  - Activité professionnelle
  - Métier
  - Demandeur
contact_link: support@pole-emploi.io
doc_tech_external: https://pole-emploi.io/data/api/pole-emploi-connect/metiers-recherches?tabgroup-api=documentation&doc-section=api-doc-section-caracteristiques
themes:
  - Emploi
kind:
  - API
from: pole-emploi
visits_2019: 1000
last_update: 02/08/2021
---

### A quoi sert l'API métiers recherchés ?

Avec l'API métier recherchées, accédez aux métiers privilégiés enregistrées par un utilisateur sur pole-emploi.fr. Découvrez les caractéristiques, la documentation et les conditions d’obtention et d’exploitation de cette API.

Cette API fait remonter les activités professionnelles recherchées (salariées ou non-salariées) par un individu et renseignées au sein du profil de compétences de son espace personnel sur pole-emploi.fr.

Deux métiers recherchés du profil au maximum seront remontés par cette API. Le métier peut être une « reprise » d’entreprise ou un projet d’adhésion à une « franchise ».

Pour chacun de ces métiers les ressources suivantes seront exposées :

Intitulé du métier (code ROME, code appellation et libellé de l’appellation), expérience (en années ou en mois), lieu d’habitation et mobilité (trajet accepté en minutes, en heures, en kilomètres), lieux de travail acceptés, salaire (brut minimum accepté en euros, unité (horaire/mensuel/annuel, cachet), types de contrats souhaités, temps de travail souhaité (temps plein/temps partiel).

Exemple d’usage : un job board pourra afficher des offres correspondant à la recherche d’emploi contenue dans le profil de compétences de l’individu.
