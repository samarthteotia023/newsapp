
import { 
  Link
 
} from "react-router-dom";
const Navbar= ()=> {
 
    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Sports</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
    )
  }


export default Navbar


