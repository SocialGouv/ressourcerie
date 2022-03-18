import React from 'react';
import { GetStaticProps } from 'next';

import { getAllAPIs, IApi } from '../model';
import { getAllGuides, IGuideElement, IGuideElementShort } from '../model';
import { RichLink } from '../uiComponents';
import Page from '../layouts/page';

import {
  UseCaseSection,
  ApiTripletSection,
  ArticleTripletSection,
  ExplanationSection,
  Baseline,
  DLNUFSection,
} from '../components/home';

interface IProps {
  apis: IApi[];
  articles: IGuideElementShort[];
}

interface Props {
  articles: IGuideElementShort[];
  generalGuides: IGuideElementShort[];
}

const GuideLink: React.FC<{ guide: IGuideElementShort }> = ({ guide }) => (
  <RichLink
    title={guide.title}
    image={guide.image ? `/images/guides/thumbnail_${guide.image}` : undefined}
    href={guide.path}
    labels={guide.api || []}
  />
);

const Home: React.FC<IProps> = ({ apis, articles }) => (
  <Page
    title="Ressourcerie"
    canonical={`https://ressourcerie.fabrique.social.gouv.fr`}
    description="Simplifiez le partage et la circulation des données administratives grace à api.gouv, le site qui référence toutes les API du service public."
  >
    <Baseline />
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

  const mostInterstingArticles = articlesList.slice(0, 3)

  const mostInterestingApis = apiList
    .sort((a, b) => ((a.visits_2019 || 0) > (b.visits_2019 || 0) ? -1 : 1)) 
    .slice(0, 25);

  const refreshList = () => {
    return {
      apis: mostInterestingApis.slice(0, 3),
      articles: mostInterstingArticles
    };
  };

  return {
    props: refreshList(),
  };
};

export default Home;
