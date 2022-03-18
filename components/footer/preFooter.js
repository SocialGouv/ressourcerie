import constants from '../../constants';
import { ButtonLink } from '../../uiComponents/button';
import { logCTA } from '../../utils/client/analytics';

const PreFooter = ({ background }) => (
  <section
    id="pre-footer"
    style={{
      backgroundColor: background || constants.colors.lightestGrey,
    }}
  >
    <div className="fr-container links">
      <div>
        <p>Vous ne trouvez pas la ressource dont vous avez besoin ?</p>
        <ButtonLink
          href={`mailto:contact@numericite.eu?subject=Contact%20via%20ressourcerie.fabrique.social.gouv.fr`}
          onClick={() => logCTA('CTA pre-footer')}
        >
          Nous contacter
        </ButtonLink>
      </div>
      <div>
        <p>Vous souhaitez contribuer ?</p>
        <ButtonLink href={constants.links.ADD_API} alt>
          Référencer ma ressource
        </ButtonLink>
      </div>
    </div>
  </section>
);

export default PreFooter;
