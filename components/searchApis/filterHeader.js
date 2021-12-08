import { SearchBar, Dropdown } from '../../uiComponents';

export const FilterHeader = ({
  search,
  setKind,
  allKindsOptions,
  setProducer,
  allProducersOptions,
  setTheme,
  allThemesOptions,
  setAPIType,
  allAPITypeOptions,
  searchFromQueryString,
}) => (
  <section id="search-ressource-filters" className="fr-container ">
    <div className="dropdown-filters">
      <Dropdown
        label="Type de ressource"
        onChange={setKind}
        placeholder="Tous les types"
        selectOptions={allKindsOptions}
      />
      <Dropdown
        label="Thématique"
        onChange={setTheme}
        placeholder="Tous les thèmes"
        selectOptions={allThemesOptions}
      />
      <Dropdown
        label="Producteur"
        onChange={setProducer}
        placeholder="Tous les Producteurs"
        selectOptions={allProducersOptions}
      />
    </div>
    <div className="searchbar-filter">
      <SearchBar
        onSearch={search}
        style={{ marginTop: '10px', width: '400px', maxWidth: '100%' }}
        defaultValue={searchFromQueryString}
        placeholder="Recherchez un service, un ministère"
        label="Rechercher"
      />
    </div>
  </section>
);

export default FilterHeader;
