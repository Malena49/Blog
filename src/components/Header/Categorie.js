import { Link } from 'react-router-dom'

function Categorie({route, label, setRoute, setLabel}) {
const handleClick = (e) => {
    setLabel(e.target.textContent);
    setRoute(route);
}

    return (
      
             <Link onClick={handleClick} className="menu-link menu-link--selected" to={route}>{label}
             </Link>

    )
}

export default Categorie
