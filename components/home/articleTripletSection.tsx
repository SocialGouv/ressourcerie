import React from 'react';

import { ButtonLink } from '../../uiComponents';
import { RichLink } from '../../uiComponents';
import { IGuideElementShort } from '../../model';

const GuideLink: React.FC<{ guide: IGuideElementShort }> = ({ guide }) => (
    <RichLink
      title={guide.title}
      image={guide.image ? `/images/guides/thumbnail_${guide.image}` : undefined}
      href={guide.path}
      labels={guide.api || []}
    />
  );


const ArticleTripletSection = ({ articlesList } : {articlesList:any}) => {
  return (
    <section id="article-triplet">
      <div className="fr-container">
        <h3>Découvrez les derniers guides et articles concernant la ressourcerie:</h3>
        <div className="default-grid">
          {articlesList.map((guide:any) => (
            <GuideLink key={guide.title} guide={guide} />
          ))}
        </div>
      </div>
      <div className="layout-center">
        <ButtonLink href="articles" size="large" alt>
          Voir toutes les articles ☞
        </ButtonLink>
      </div>
    </section>
  );
};
export default ArticleTripletSection;