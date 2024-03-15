import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

  // var myDropdown = document.querySelector('.dropdown');
  // myDropdown ? myDropdown.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('dropdown-item')) {
  //     alert('Item clicked: ' + event.target.textContent);
  //   }
  // }) : ""

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/about">About</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
)
}

export default NavBar

{/* //     <div>
//       <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
//         <div className="container-fluid d-flex justify-content-between">
//           <Link className="navbar-brand" to="/">NewsApp</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{width:'75%'}}>
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/general">General</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item dropdown">
//                 <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" >
//                   India
//                 </button>
//                 <ul className="dropdown-menu dropdown-menu-dark" onClick={props.handleCountry}>
//                   <li><a className="dropdown-item" href="#">India</a></li>
//                   <li><a className="dropdown-item" href="#">United States</a></li>
//                   <li><a className="dropdown-item" href="#">Canada</a></li>
//                   <li><a className="dropdown-item" href="#">United Kingdom</a></li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// } */}
