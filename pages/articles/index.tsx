import React from 'react';
import { NextPage } from 'next';
import Page from '../../layouts/page';
import { getAllGuides, IGuideElement, IGuideElementShort } from '../../model';
import { RichLink } from '../../uiComponents';

interface Props {
  guidesForAnAPI: IGuideElementShort[];
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

const Guides: NextPage<Props> = ({ guidesForAnAPI, generalGuides }) => {
  return (
    <Page
      title="Liste des articles de la ressourcerie"
      description="La liste de toutes nos articles au sujet des ressources du service public."
    >
      <section className="fr-container page-baseline">
        <h1>Comprendre les ressources de la sphère travail</h1>
      </section>
      <section className="fr-container sub-section">
        <h2>Comment fonctionnent les différents types de ressources ?</h2>
        <div className="default-grid">
          {generalGuides.map(guide => (
            <GuideLink key={guide.title} guide={guide} />
          ))}
        </div>
      </section>
      <section className="fr-container sub-section">
        <h2>Comment s’utilisent les ressources ?</h2>
        <div className="default-grid">
          {guidesForAnAPI.map(guide => (
            <GuideLink key={guide.title} guide={guide} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .sub-section {
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .default-grid > span {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>
    </Page>
  );
};

export const getStaticProps = async () => {
  const guides = await getAllGuides();

  const simplify = (guide: IGuideElement): IGuideElementShort => {
    return {
      path: guide.path,
      slug: guide.slug,
      title: guide.title,
      api: guide.api || [],
      image: guide.image || null,
    };
  };

  const guidesToPublish = guides.filter(guide => guide.publish);

  return {
    props: {
      guidesForAnAPI: guidesToPublish
        .filter(guide => (guide.api || []).length > 0)
        .map(simplify),
      generalGuides: guidesToPublish
        .filter(guide => (guide.api || []).length === 0)
        .map(simplify),
    },
  };
};

export default Guides;
