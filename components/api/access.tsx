import React from 'react';

import { ButtonLink } from '../../uiComponents/button';

import { logDemanderAcces } from '../../utils/client/analytics';
import SubSection from './subSection';
import { IIsApiOpen } from '../../model';
import Emoji from '../../uiComponents/emoji';

interface IAccessProps {
  is_open: IIsApiOpen;
  slug: string;
  doc_external_link?: string;
  doc_swagger_link?: string;
  account_link?: string;
  contact_link?: string;
}

const DESCRIPTIONS = {
  open: 'La ressource est ouverte à tous. Vous pouvez y accéder dès maintenant :',
  account:
    '⚠️ Attention ! L\'accès à cette ressource nécessite de prendre contact avec l\'équipe. :',
  closed: 'La ressource nécessite une habilitation :',
};

const AccessButton = ({ emoji = '', emojiLabel = '', label = '' }) => (
  <>
    <Emoji emoji={emoji} label={emojiLabel} />
    {label}
  </>
);

const Access: React.FC<IAccessProps> = ({
  is_open,
  slug,
  doc_external_link = '',
  doc_swagger_link = '',
  account_link = '',
  contact_link = '',
}) => {
  let accessDescription = '';
  let accessHref = '';
  let accessLabel = <></>;
  let accessHref2 = '';
  let accessLabel2 = <></>;
  let ext = false; // external link ?

  if (!doc_swagger_link && !doc_external_link) {
    throw new Error(
      `API ${slug} should have either an external or an internal documentation.`
    );
  }

  switch (is_open) {
    case 1:
      accessDescription = DESCRIPTIONS.open;
      accessHref = doc_external_link;
      accessLabel = (
        <AccessButton
          emoji="👩‍💻"
          emojiLabel="code"
          label={'Accéder au site de la ressource'}
        />
      );
      accessHref2 = doc_swagger_link;
      accessLabel2 = (
        <AccessButton
          emoji="👩‍💻"
          emojiLabel="code"
          label={'Tester la ressource'}
        />
      );
      console.log('1 : ', accessHref)
      console.log('2 : ', accessHref2)
      break;
    case 0:
      accessDescription = DESCRIPTIONS.account;
      accessHref = 'mailto:' + contact_link;
      accessLabel = (
        <AccessButton
          emoji="↗️"
          emojiLabel="attention"
          label="Prendre contact"
        />
      );
      console.log('1 : ', accessHref)
      ext = true;
      break;
    case -1:
      accessDescription = DESCRIPTIONS.closed;
      accessHref = `/les-api/${slug}/demande-acces`;
      accessLabel = (
        <AccessButton
          emoji="🔑"
          emojiLabel="clef"
          label="Faire une demande d’accès"
        />
      );
      break;
    default:
      throw new Error('is_open should be 0, -1 or 1');
  }

  return (
    <SubSection title="Accéder à la ressource">
      <div>{accessDescription}</div>
      <div className="layout-right vertical-margin">
        {doc_external_link !== null &&
          <ButtonLink
          href={accessHref}
          size="large"
          target={ext ? '_blank' : ''}
          rel={ext ? 'noreferrer noopener' : ''}
        >
          {accessLabel}
        </ButtonLink>
        }
      </div>
      <div className="layout-right vertical-margin">
      {is_open === 1 && doc_swagger_link !== null &&
        <ButtonLink
          href={accessHref2}
          size="large"
          target={ext ? '_blank' : ''}
          rel={ext ? 'noreferrer noopener' : ''}
        >
          {accessLabel2}
        </ButtonLink>
      }
      </div>
    </SubSection>
  );
};

export default Access;
