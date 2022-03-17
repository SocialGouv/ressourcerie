import ResultCard from './resultCard';

const Results = ({ results }) => {
  return (
    <section id="api-results" className="page-body-container-datagouv">
      <div className="fr-container">
        <h3>Pour aller plus loin ...</h3>
        <div className="results-counter ">
          {results.length} résultat{results.length > 1 && 's'} trouvé(s) sur data.gouv.fr
        </div>
        <div className="default-grid">
          {results.length > 0 ? (
            results.map(result => <ResultCard key={result.slug} {...result} />)
          ) : (
            <div>
              <b>Aucun résultat trouvé pour la recherche.</b>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
