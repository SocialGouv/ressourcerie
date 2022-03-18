---
title: Particuliers employeurs, par catégorie d'emploi et par région
tagline: Particuliers employeurs, par catégorie d'emploi et par région
producer: urssaf
category: Public
is_open: 1 # -1 means API not open
account_link: https://pole-emploi.io/inscription
external_site: https://open.urssaf.fr/explore/dataset/particuliers-employeurs-par-categorie-demploi-et-par-region/api/
partners:
  - urssaf
keywords:
  - urssaf
doc_tech_external: https://open.urssaf.fr/explore/dataset/particuliers-employeurs-par-categorie-demploi-et-par-region/api/
themes:
  - Emploi
kind:
  - API
from: urssaf
visits_2019: 1000
last_update: 02/08/2021
---

### A quoi sert l'API ?

<p>Séries trimestrielles sur les particuliers employeurs issues des dispositifs Cesu, Pajemploi et DNS (publiées<span> dans l'</span><a href=\"https://www.acoss.fr/home/observatoire-economique/publications/acoss-stat.html\" style='background-color: rgb(255, 255, 255); font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; font-weight: 400;' target=\"_blank\"><span style=\"font-weight: bolder;\">Acoss Stat</span></a><span style=\"font-size: 12.495px;\">)</span><span>.</span><span> </span><span style=\"font-family: Arial, sans-serif;\">►</span><u style=\"font-weight: bolder;\"><a href=\"https://open.urssaf.fr/explore/dataset/planning-de-mise-a-jour/table/?sort=date_de_mise_a_jour\" target=\"_blank\">MISE A JOUR</a></u><span style=\"font-weight: bolder;\"> : fin de trimestre+ ~110 jours.</span></p><p><u>Source</u> : Urssaf, CnCesu, Centre Pajemploi</p><p><u>Profondeur</u> : depuis 2004.</p><p>Les données sont ventilées par catégorie d'emploi (type d'emploi x dispositif déclaratif) :<br/>- CESU<br/>- DNS_AM (Assistantes maternelles - DNS)<br/>- DNS_GED (Garde d'enfant - DNS)<br/>- DNS_HGED (Hors garde d'enfant - DNS)<br/>- PAJE_GED (Garde d'enfant à domicile - PAJE)<br/>- PAJE_AM (Assistantes maternelles - PAJE)</p><p>Elles sont par ailleurs déclinées par région.</p><p>Méthodologie :<br/></p><ul><li>Les données déclarées par le CESU ne permettent pas d'identifier le type d'activité exercé par le salarié. Elles sont ainsi classées ici dans le type d'emploi \"Hors garde d'enfant\" même si le CESU peut être utilisé pour la garde d'enfants notamment de plus de 6 ans (le dispositif Paje étant privilégié pour les enfants plus jeunes).</li><li>la modalité \"_calage_\" permet d'assurer la cohérence des séries corrigées des variations saisonnières (CVS) pour chacun des croisements. En effet, les CVS des différentes strates étant estimées séparément, la somme des CVS n'est pas forcément égale à la CVS de la somme.<br/></li></ul><p><br/></p>
