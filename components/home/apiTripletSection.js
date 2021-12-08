import React from 'react';

import ApiCard from '../searchApis/apiCard';
import { ButtonLink } from '../../uiComponents';

const ApiTripletSection = ({ apiList }) => {
  return (
    <section id="api-triplet">
      <div className="fr-container">
        <h3>Découvrez les communs numériques de la sphère travail&nbsp;:</h3>
        <div className="default-grid">
          {apiList.map(api => (
            <ApiCard key={api.title} {...api} />
          ))}
        </div>
      </div>
      <div className="layout-center">
        <ButtonLink href="rechercher-commun" size="large" alt>
          Voir toutes les ressources ☞
        </ButtonLink>
      </div>
    </section>
  );
};
export default ApiTripletSection;
