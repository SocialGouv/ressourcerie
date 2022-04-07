import React from 'react';

import { TypingCarousel, ButtonLink } from '../../uiComponents';
import MagnifyingGlass from '../../uiComponents/icon/magnifyingGlass';

const Baseline = () => (
  <section
    id="homepage-mission-statement"
    className="fr-container layout-center"
  >
    <h1>
      Des communs pour les actions numériques de la sphère travail
    </h1>
    <br />
    <h2>
    Partagez et réutilisez cas d'usages, ressources numériques et documentation.
    </h2>
    <br />
    <div className="baseline-buttons">
      <ButtonLink href="/rechercher-commun" size="large">
        <span className="layout-center">
          <MagnifyingGlass color="#fff" />
          &nbsp; Rechercher une ressource
        </span>
      </ButtonLink>
      <br />
      <ButtonLink href="/apropos" size="large" alt>
        <span className="layout-center">
          À propos de la ressourcerie
        </span>
      </ButtonLink>
    </div>
  </section>
);

export default Baseline;
