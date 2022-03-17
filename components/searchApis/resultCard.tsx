import React from 'react';
import Link from 'next/link';

import { getUptimeState, roundUptime } from '../../utils/uptime';
import { textHighlighter, ISearchMatch } from './filtersLogic';
import constants from '../../constants';
import { IIsApiOpen } from '../../model';
import LabelKind from './labelKind';
import { uniq } from 'lodash';

interface IProps {
  title: string;
  page: string;
  organization: Record<string, string>;
  resources: Record<string, string>[];
  tagline: string;
  uptime: number;
  logo: string;
  is_open: IIsApiOpen;
  is_france_connected: number | null;
  owner: string;
  kind: string[];
  matches?: ISearchMatch;
}

const ApiCard: React.FC<IProps> = ({
  title,
  page,
  organization,
  resources,
  tagline = '',
  uptime = null,
  logo,
  owner,
  kind = [],
  is_open,
  is_france_connected = 0,
  matches = {},
}) => {
  return (
    <>
      <Link href={page} as={page}>
        <a className="api-card dont-apply-link-style">
          <div className="content">
            <img
              src={organization.logo_thumbnail}
              alt={logo ? `logo de ${title}` : 'logo générique api.gouv'}
            />

            <div
              className="header"
              dangerouslySetInnerHTML={{
                __html: textHighlighter(matches.title, title),
              }}
            />

            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: textHighlighter(matches.tagline, tagline),
              }}
            />
          </div>

          {is_france_connected && is_france_connected > 0 ? (
            <div className="card-extra fc-compat">
              <img src="/images/divers/franceConnectLogo.png" alt="fc-logo" />
              <div>
                {is_france_connected === 2
                  ? ' S’utilise avec '
                  : ' Peut s’utiliser avec '}
                FranceConnect
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className="card-extra">
            <div>
              <b>Produit par :</b>{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: organization.name,
                }}
              />
            </div>
          </div>

          <div className="card-extra card-footer">
            <div className="badges">
              <div className="badge contract">
                    
                    <div className="label-grid">
                        <LabelKind kind={uniq(resources.map(res => res.format))} />
                    </div>
              </div>
              <div className="badge filler"></div>

            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .uptime-stat {
          width: 10px;
          height: 10px;
          border-radius: 100%;
          margin: 0 0.2em;
          background-color: ${getUptimeState(uptime)};
        }
      `}</style>
    </>
  );
};

export default ApiCard;
