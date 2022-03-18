import React from 'react';

import Page from '../layouts/page';
import { ButtonLink } from '../uiComponents';
import Emoji from '../uiComponents/emoji';

const NewAPI = () => (
  <Page usePreFooter={false} title="Référencer une nouvelle API">
    <div className="text-wrapper text-style">
      <h1 className="layout-center">Référencer une nouvelle ressource</h1>
      <p className="layout-center">
        Vous êtes un ministère, une agence publique, une collectivité ?
        Complétez ce formulaire pour référencer une nouvelle ressource dans le
        catalogue ressourcerie.fabrique.social.gouv.fr
      </p>
      <div>
        <h2>A lire avant de commencer</h2>
        <p>
          Ce formulaire{' '}
          <b>ne crée pas automatiquement une fiche ressource dans le catalogue</b>. Il
          vous sert à prendre contact avec notre équipe et
          à nous transmettre tous les éléments nécessaires pour créer une fiche
          ressource.
        </p>
        <p>
          Pour référencer sa ressource sur ressourcerie.fabrique.social.gouv.fr, il faut préalablement avoir
          développé et documentée la ressource. <br />
          Ensuite il faut se mettre à la place du futur lecteur. Sur la fiche
          ressource, le lecteur doit pouvoir trouver les informations suivantes :
        </p>
        <ul>
          <li>Qui propose cette ressource ? </li>
          <li>Qui a le droit de l'utiliser' ?</li>
          <li>À quoi sert-elle ?</li>
          <li>
            Comment s'en sert-on ? (paramètre en entrée, limitations d'appels,
            plage horaire, ... )
          </li>
        </ul>
      </div>
      <div>
        <p>
          <b>Aucune information n'est obligatoire</b>. Si vous ne savez pas
          comment répondre, laissez le champ vide et soumettez votre demande.
        </p>
        <div className="layout-center">
          <ButtonLink
            href="https://y392uzg0qne.typeform.com/to/lvy8EKdb"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            Remplir le formulaire
          </ButtonLink>
        </div>
      </div>
    </div>
  </Page>
);

export default NewAPI;
