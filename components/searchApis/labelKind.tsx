import React from 'react';
import Link from 'next/link';
import { textHighlighter, ISearchMatch } from './filtersLogic';

interface IProps {
  kind: string[];
}

const LabelKind: React.FC<IProps> = ({
  kind,
}) => {
  return (
    <>
        {kind.map(kind => (
            <div key = {kind} className={kind.toLowerCase().replace(' ', '-')}>{kind}</div>
        ))}
        <style jsx>{`
        .uptime-stat {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            margin: 0 0.2em;
        }
        `}</style>
    </>
  );
};

export default LabelKind;
