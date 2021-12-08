import React from 'react';

import { TypingCarousel, ButtonLink } from '../../uiComponents';
import MagnifyingGlass from '../../uiComponents/icon/magnifyingGlass';

const Baseline = () => (
  <section
    id="homepage-mission-statement"
    className="fr-container layout-center"
  >
    <h1>
      Des communs pour les actions data de la sphère travail
    </h1>
    <br />
    <h2>
    Partagez et réutilisez codes sources, algorithmes et documentation.
    </h2>
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
