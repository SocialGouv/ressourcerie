const explanations = [
  {
    title: 'Trouvez des ressources existantes',
    src: '/images/home/find.png',
  },
  {
    title: 'Demandez une ressource à la communauté',
    src: '/images/home/construction.png',
  },
  {
    title: 'Partagez vos réalisations',
    src: '/images/home/access.png',
  },
];

const ExplanationSection = () => (
  <div id="explanation-section">
    <div className="fr-container">
      <h2>Vous développez un service data&nbsp;?</h2>
      <div>
        {explanations.map(explanation => (
          <div key={explanation.src}>
            <h3 dangerouslySetInnerHTML={{ __html: explanation.title }} />
            <img src={explanation.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ExplanationSection;
