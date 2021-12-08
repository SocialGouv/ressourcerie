import React from 'react';
import Link from 'next/dist/client/link';
import constants from '../../constants';
import { ButtonLink } from '../../uiComponents';
import MagnifyingGlass from '../../uiComponents/icon/magnifyingGlass';

const USE_CASES = [
  {
    title: 'La ministre Elisabeth Borne',
    content:
      '"La donnée et l’intelligence artificielle (IA) sont amenées à prendre de plus en plus de place dans la transformation du monde du travail. Elles présentent des promesses immenses d’une efficacité accrue et d’une simplification de l’action des agents de mon ministère au service des actifs et des entreprises. Elles doivent permettre de construire des services innovants aux usagers et de mieux cibler nos actions tout en respectant les préoccupations éthiques, sociales et environnementales de tout service public."',
    // apis: [],
    picture: '/images/home/achievement.png',
    button: {
      txt: 'Télécharger la feuille de route',
      linkTo: "/resources/feuillederoute_MTEI.pdf",
    },
  },
  /*{
    title: 'Le pass metz Loisirs',
    content:
      'Le Pass Metz Loisirs permet aux enfants de pratiquer une activité ( sportive, culturelle ou de loisirs) dans les structures conventionnées ou s’inscrire aux activités socio-éducatives après la classe et le mercredi après-midi. Il est subventionné par la ville pour les familles à faibles revenus sur la base du quotient familial. Les familles n’ont plus à fournir de justificatifs pour cette démarche.',
    // apis: [],
    picture: '/images/home/metz.jpg',
    button: {
      txt: 'Aidez-moi à dématérialiser des justificatifs',
      linkTo: constants.links.mailto.PASS_METZ,
    },
  },*/
];

const UseCaseSection = () => (
  <section id="use-cases" className="fr-container">
    {USE_CASES.map(useCase => (
      <div className="use-case" key={useCase.title}>
        <div className="content-wrapper">
          <h3>{useCase.title}</h3>
          <div>{useCase.content}</div>
          {useCase.apis && (
            <div className="apis">
              <b>API utilisées&nbsp;:</b> {useCase.apis.join(', ')}
            </div>
          )}
        </div>
        <div className="content-wrapper wrapper-bis">
          <div className="img-wrapper">
          {useCase.button && (
            <img src={useCase.picture} alt={useCase.title} />
          )}
          </div>
          <ButtonLink href={useCase.button.linkTo} size="large" alt>
            <span className="layout-center">
              {useCase.button.txt}
            </span>
          </ButtonLink>
        </div>
      </div>
    ))}
  </section>
);

export default UseCaseSection;
