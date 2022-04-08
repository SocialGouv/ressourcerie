import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import {
    IApi,
    getAPI,
    getGuide,
  getAllUseCases,
  IGuideElement,
  IGuideElementShort,
} from '../../model';
import Page from '../../layouts';

import { HEADER_PAGE } from '../../components';
import RichReactMarkdown from '../../components/richReactMarkdown';
import ApiCard from '../../components/searchApis/apiCard';
import constants from '../../constants';
import { RichLink } from '../../uiComponents';
import Share from '../../uiComponents/share';
import Feedback from '../../components/feedback';
import { getUseCase } from '../../model/readOnDiskForWebpack';

interface IProps {
    usecase: IGuideElement;
  related_ressources: IApi[];
  related_guides: IGuideElementShort[];
}

const computeRelatedRessources = async (usecase: IGuideElement) => {
  const related_ressources = await Promise.all(
    (usecase.related_ressources || []).map(
      async (slug: string) => await getAPI(slug)
    )
  );
  return related_ressources
};

const computeRelatedGuides = async (usecase: IGuideElement) => {
    const related_guides = await Promise.all(
      (usecase.related_guides || []).map(
        async (slug: string) => await getGuide(slug)
      )
    );
    return related_guides.map(guide => {
      const { title, slug, image = null } = guide;
      return { title, slug, image };
    });
  };

const Usecase: React.FC<IProps> = ({ usecase, related_ressources, related_guides }) => {
  const { title, slug, tagline, body, image, noindex = false } = usecase;
  return (
    <Page
      headerKey={HEADER_PAGE.APIS}
      title={title}
      description={`${tagline}`}
      canonical={`https://ressourcerie.fabrique.social.gouv.fr/usecases/${slug}`}
      noIndex={noindex}
      usePreFooter={false}
    >
        <div>
        <div className="hero">
          <div className="text-wrapper">
            <h1>{title}</h1>
            {tagline && <h2>{tagline}</h2>}
          </div>
        </div>

        <div id="description" className="fr-container">
            <div className="right-column-grid">
                <div className="left-column text-style">
                    {related_ressources.length > 0 && (
                        <div className="text-style">
                            <h2>Les ressources utilisées</h2>
                            <div>
                            {related_ressources.map(ressource => (
                                <div className="api-card" key={ressource.title}>
                                    <ApiCard key={ressource.title} {...ressource} />
                                </div>
                            ))}
                            </div>
                        </div>
                    )}
                    
                </div>
                <div className="right-column info-column">
                    <div className="text-style text-wrapper">
                        <RichReactMarkdown source={body} />
                    </div>
                    {related_guides.length > 0 && (
                        <div className="text-style text-wrapper">
                        <h2>Articles liés à ce cas d'usage</h2>
                            <div className="default-grid">
                            {related_guides.map(guide => (
                                <RichLink
                                key={guide.slug}
                                title={guide.title}
                                image={
                                    guide.image
                                    ? `/images/guides/thumbnail_${guide.image}`
                                    : undefined
                                }
                                href={`/articles/${guide.slug}`}
                                />
                            ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
        </div>
        
        
        
        <div className="text-wrapper">
          <Feedback />
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 1px 0;
          background: ${image ? `url(${`/images/usecases/${image}`})` : '#fff'};
          background-position: center;
          background-size: cover;
          position: relative;
        }
        .hero:after {
          content: '';
          background: ${constants.colors.backgroundRedGradient};
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          opacity: ${image ? `0.8` : '1'};
          z-index: 0;
        }
        .api-card {
            margin-bottom:1rem;
        }
        .right-column-grid {
            display: grid;
            grid-template-columns: 30% 70%;
            grid-gap: 40px;
        }
        .hero .text-wrapper {
          position: relative;
          z-index: 1;
        }

        .hero h2 {
          font-size: 1.2rem;
          color: #fff;
          text-align: center;
        }
        .hero h1 {
          margin-top: 0px;
          text-align: center;
          margin-bottom: 20px;
          color: #fff;
        }
        @media only screen and (min-width: 1px) and (max-width: 900px) {
            .right-column-grid {
              display: flex;
              flex-direction: column-reverse;
            }
          }
      `}</style>
    </Page>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const usecases = await getAllUseCases();

  return {
    paths: usecases.map((usecase: IGuideElement) => {
      return {
        params: {
          slug: usecase.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const slug = params.slug;

  //@ts-ignore
  const usecase = await getUseCase(slug);
  const related_ressources = await computeRelatedRessources(usecase);

  const related_guides = await computeRelatedGuides(usecase);

  return {
    props: {
        usecase,
        related_ressources,
        related_guides
    },
  };
};

export default Usecase;
