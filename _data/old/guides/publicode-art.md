---
title: Publicodes
tagline: Rendre les simulateurs explicables et transparents, comment le Code du travail numérique utilise le langage Publicodes pour rendre le droit du travail plus accessible
tags: cas usage, api sirene,ETALAB, api entreprise, KBIS, INSEE, open data
image: dossier.jpg
noindex: false # this page will appear on Google
publish: true # this page will appear on /guides page
api:
  - Explocode
---

Mis en ligne le 1er janvier 2020, le Code du travail numérique propose aux personnes salariées et aux employeurs de droit privé des outils pour mieux comprendre le droit du travail. L’équipe technique du projet s’est récemment tournée vers le langage open source Publicodes, développé par une équipe au sein de la Startup d'État mon-entreprise, qui permet d’implémenter facilement et de rendre plus explicables des simulateurs.

## Les simulateurs de la boîte à outils du CDTN

La complexité du droit du travail fait qu’il est souvent difficile pour les personnes non spécialistes de comprendre les règles s’appliquant à leur situation. Pour pallier ce problème, le ministère du Travail a lancé le <External href='https://code.travail.gouv.fr'>Code du travail numérique</External>. Depuis le 1er janvier 2020, ce service public en ligne, développé par une équipe pluridisciplinaire, permet à toutes et tous les salariés et employeurs de droit privé d’obtenir des réponses personnalisées sur le droit de travail.

Le CDTN propose notamment dans sa “boîte à outils” des simulateurs permettant aux salariés et employeurs d’effectuer un grand nombre de calculs, tels que les indemnités de licenciement ou de précarité ou le coût total employeur d’un salaire.

<Centered>
![Accueil du Code du travail numérique](/images/guides/publicode_accueil.png)
</Centered>

Or, développer des simulateurs implique de traduire le langage très juridique de la réglementation en code informatique.

Ces simulateurs peuvent utiliser les langages de programmation “classiques”, mais les outils numériques développés sont alors peu compréhensibles et appropriables par les spécialistes métier. Or, les spécialistes métiers ont besoin de rester impliqués pour s’assurer que les simulateurs implémentent bien les mêmes règles et restent à jour en fonction de l’évolution des lois, conventions, etc. Par ailleurs, dès que le droit devient complexe (comme c’est le cas en droit du travail, qui s’appuie notamment sur beaucoup de conventions collectives), il peut être difficile d’avoir recours à ces langages classiques.

## Publicodes : transformer rapidement des règles juridiques en code informatique

Ces enjeux ne sont pas propres au seul droit du travail : la traduction de règles juridiques en code informatique est une problématique fréquente dans l’administration. Or, les langages de programmation “classiques” ne prennent pas en compte tous ces enjeux. C’est ce qui a poussé l’équipe à se tourner vers un langage spécialisé : <External href='https://publi.codes/'>Publicodes</External>.

<Centered>
![page d’accueil du site de présentation de Publicodes](/images/guides/publicodes.png)
</Centered>

Publicodes permet aux spécialistes techniques et métiers de dialoguer plus facilement autour d’un langage plus facilement compréhensible. En outre, il met l’accent sur l’explication des règles, en générant automatiquement une page explicative facilement compréhensible par des personnes mêmes non techniques, permettant aux utilisateurs et concepteurs de “garder la main” sur l’outil.

L’équipe du Code du travail numérique a commencé par recenser dans son catalogue <External href='https://code.travail.gouv.fr/outils/simulateur-embauche'>le simulateur de calcul de salaire brut</External> développé par <External href='https://mon-entreprise.urssaf.fr/'>mon-entreprise.fr</External>. Ce simulateur s’appuie sur Publicodes. Suite à cette première implémentation, les spécialistes en développement du CDTN ont effectué un état de l’art des langages pour construire des simulateurs, et leur choix s’est définitivement arrêté sur Publicodes pour les développements futurs.

Martial Maillot, développeur de l’équipe, explique : “L'équipe de code du travail numérique a choisi de passer à Publicodes pour parler le même langage que ses experts métiers. La syntaxe de Publicodes apporte beaucoup de flexibilité et de lisibilité dans l'écriture des textes de lois face à notre ancien code en JavaScript.”

Le premier simulateur développé par le CDTN avec Publicodes, sorti en novembre 2021 permettra de calculer la <External href='https://code.travail.gouv.fr/outils/preavis-retraite'>date de préavis de retraite</External>.

## Un langage développé et réutilisé par l’administration

Publicodes a été initialement développé dans le cadre du service public numérique mon-entreprise.fr, désormais par l’URSSAF. A l’origine, il a été créé pour <External href='https://github.com/betagouv/mon-entreprise/releases?page=4'>calculer les cotisations sociales</External>.

Maël Thomas, membre de l’équipe fondatrice, raconte : “au coeur de cette expérimentation était l’aspiration à expliquer ce modèle social de plus en plus complexe, à n’importe quel internaute curieux, plutôt que de réserver sa compréhension à une plongée pénible dans le code, accessible uniquement à une élite de développeurs.”

L’expérimentation a été un succès : plus de 4 millions de simulations par an à ce jour sur une dizaine de simulateurs développés pour mon-entreprise.fr.
Suite à ce succès, le moteur de calcul générique a été séparé du code de mon-entreprise par l’équipe pour pouvoir être réutilisé par d’autres.

Aujourd’hui, publi.codes est développé sur son <External href='https://hackmd.io/@laem/genese-publicodes'>dépôt github</External> par une petite communauté active (principalement des membres de <External href='https://beta.gouv.fr/'>beta.gouv.fr</External>, mais aussi des chercheurs de l’INRIA, des banques, etc.). Il est maintenant utilisé par plusieurs institutions publiques, telles que l’ADEME (pour le projet <External href='https://nosgestesclimat.fr/'>Nos Gestes Climat</External>). Il a également été réutilisé dans des <External href='https://publi.codes/communaut%C3%A9'>beta.gouv.fr</External>projets citoyens</External>.

Si vous aussi vous cherchez un langage simple et transparent pour transformer la législation en code informatique, vous pouvez facilement <External href='https://publi.codes/docs/se-lancer/'>implémenter Publicodes dans votre projet</External> en consultant la documentation technique.
