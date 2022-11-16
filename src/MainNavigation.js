import { NavLink } from "react-router-dom";



export default function MainNavigation() {

  
  return (
    <header >
      <div >Rugby Data</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/countries">All Countries</NavLink>
          </li>
          <li>
            <NavLink to="/leagues">All Leagues</NavLink>
          </li>
          <li>
            <NavLink to="/teams">Teams</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
