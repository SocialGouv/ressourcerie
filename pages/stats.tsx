import React from 'react';
import Page from '../layouts/page';
import Emoji from '../uiComponents/emoji';

const Stats: React.FC = ({ }) => {
    return (
        <Page
          title="Statistiques"
          description="Découvrez les chiffres clés de la plateforme Ressourcerie"
          usePreFooter={false}
          noIndex={true}
        >
        <div className="text-wrapper text-style">
            <h1>
            Statistiques <Emoji emoji="🧮" label="mathématiques" />
            </h1>
        </div>
        <iframe plausible-embed src="https://plausible.numericite.eu/share/ressourcerie.fabrique.social.gouv.fr?auth=4hJPmWdeJF3eJk8tygXp1&embed=true&theme=light" scrolling="no" frameBorder="0" loading="lazy" style={{width: '1px', minWidth: '100%', height: '1600px'}}></iframe>
        <div style={{fontSize: '14px', paddingBottom: '14px'}}>
          Stats powered by 
          <a target="_blank" style={{color: '#4F46E5', textDecoration: 'underline'}} href="https://plausible.io">
            Plausible Analytics
          </a>
        </div>
        <script async src="https://plausible.numericite.eu/js/embed.host.js"></script>
        </Page>
    )
}

export default Stats;