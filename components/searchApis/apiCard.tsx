import React from 'react';
import Link from 'next/link';

import { getUptimeState, roundUptime } from '../../utils/uptime';
import { textHighlighter, ISearchMatch } from './filtersLogic';
import constants from './../../constants';
import { IIsApiOpen } from '../../model';
import LabelKind from '../searchApis/labelKind';

interface IProps {
  title: string;
  path: string;
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
  path,
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
      <Link href="/les-api/[slug]" as={path}>
        <a className="api-card dont-apply-link-style">
          <div className="content">
            <img
              src={`/images/api-logo/${logo || constants.logo}`}
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
              <b>{owner.indexOf('&') > -1 ? 'Cop' : 'P'}roduit par :</b>{' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: textHighlighter(matches.owner, owner),
                }}
              />
            </div>
          </div>

          <div className="card-extra card-footer">
            <div className="badges">
              <div className="badge contract">
                    
                    <div className="label-grid">
                        <LabelKind kind={kind} />
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
