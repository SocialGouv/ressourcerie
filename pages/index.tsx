import React from 'react';
import { GetStaticProps } from 'next';

import { getAllAPIs, IApi } from '../model';
import { getAllGuides, getAllUseCases, IGuideElementShort } from '../model';
import Page from '../layouts/page';

import {
  UseCasesSection,
  UseCaseSection,
  ApiTripletSection,
  ArticleTripletSection,
  ExplanationSection,
  Baseline,
  NewsLetterSection,
} from '../components/home';

interface IProps {
  apis: IApi[];
  articles: IGuideElementShort[];
  UCList: IGuideElementShort[];
}

const Home: React.FC<IProps> = ({ apis, articles, UCList }) => (
  <Page
    title="Ressourcerie"
    canonical={`https://ressourcerie.fabrique.social.gouv.fr`}
    description="La plateforme qui centralise toutes les ressources de la sphère travail."
  >
    <Baseline />
    <UseCasesSection  UCList={UCList}/>
    <NewsLetterSection />
    <ExplanationSection />
    <ApiTripletSection apiList={apis} />
    <UseCaseSection />
    <ArticleTripletSection  articlesList={articles}/>

    <style jsx>{`
      h2 {
        margin: 100px 0 0;
      }
    `}</style>
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  const apiList = await getAllAPIs();
  const articlesList = await getAllGuides();
  const UCList = await getAllUseCases();

  const mostInterstingArticles = articlesList.slice(0, 3)

  const mostInterestingUseCases = UCList.slice(0, 3)

  const mostInterestingApis = apiList
    .sort((a, b) => ((a.visits_2019 || 0) > (b.visits_2019 || 0) ? -1 : 1)) 
    .slice(0, 25);

  const refreshList = () => {
    return {
      apis: mostInterestingApis.slice(0, 3),
      articles: mostInterstingArticles,
      UCList: mostInterestingUseCases
    };
  };

  return {
    props: refreshList(),
  };
};

export default Home;
