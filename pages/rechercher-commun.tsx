import React from 'react';
import { flatten, uniq } from 'lodash';
import { GetStaticProps } from 'next';

import { getAllAPIs, IApi } from '../model';
import Page from '../layouts/page';
import SearchApis from '../components/searchApis';
import { HEADER_PAGE } from '../components';
import constants from '../constants';

interface IProps {
  allApis: IApi[];
  allThemes: string[];
  allKinds: string[];
  allProducers: string[];
}

const RechercherApi: React.FC<IProps> = ({ allApis, allThemes, allKinds, allProducers }) => {
  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      preFooterBackground={constants.colors.white}
      title="Rechercher une ressource de la sphère travail"
      description="Vous faites partie d'un ministère ou d'une collectivité et vous cherchez une ressource du service public ? Vous êtes au bon endroit."
    >
      <section className="fr-container page-baseline">
        <h1>
          Vous recherchez un commun numérique de la sphère travail ? Vous êtes au bon endroit !
        </h1>
      </section>

      <SearchApis allApis={allApis} allThemes={allThemes} allKinds={allKinds} allProducers={allProducers} />
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allApis = await getAllAPIs();

  const allThemes = uniq(
    flatten(
      allApis.map(api => {
        // this must be tested with JEST first, but one never knows
        if (!api.themes) {
          throw new Error(`API must have at least one theme : ${api.slug}`);
        }
        return api.themes;
      })
    )
  ).sort();

  const allKinds = uniq(
    flatten(
      allApis.map(api => {
        // this must be tested with JEST first, but one never knows
        if (!api.kind) {
          throw new Error(`API must have at least one kind : ${api.slug}`);
        }
        return api.kind;
      })
    )
  ).sort();

  const allProducers = uniq(
    flatten(
      allApis.map(api => {
        // this must be tested with JEST first, but one never knows
        if (!api.producer) {
          throw new Error(`API must have at least one producer : ${api.slug}`);
        }
        return api.producer;
      })
    )
  ).sort();

  const sortedAllApis = allApis.sort((a, b) =>
    (a.visits_2019 || 0) < (b.visits_2019 || 0) ? 1 : -1
  );

  return {
    props: {
      allApis: sortedAllApis,
      allThemes,
      allKinds,
      allProducers,
    },
  };
};

export default RechercherApi;
