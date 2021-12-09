import React from 'react';
import PropTypes from 'prop-types'
import Categorie from '../Header/Categorie'
import './styles.scss';

const Header = ({mode, setmode,categoriesData, setRoute, setLabel, route}) => {
  const handlemode =()=>{
    setmode(!mode)
  }

  return(
  <header className="menu">
    <nav>
      {categoriesData.map((cate)=> <Categorie setRoute={setRoute} setLabel={setLabel} route={route} key={cate.label} {...cate}/>)}
      <button className="menu-btn" type="button" onClick={handlemode}>Activer le mode zen</button>
    </nav>
  </header>
)};
Header.propTypes = {
  categoriesData :  PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  }
export default Header;
