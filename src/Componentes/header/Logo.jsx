import React from 'react';
// import Logo from './Styles/Components/logo.css'


export default class Logo extends React.Component {

  render(){
      return(
          <div className="logo">
              <picture>
                  {/* <source media="(max-width: 768px)" srcSet="./img/logo-avec" /> */}
                  {/* <source media="(min-width: 769px)" srcSet="/img/logomarca-wef-imoveis-L.png" /> */}
                  {/* <ul>
                    <li>
                      <a href="logo"> */}
                      <img className= "avec" src="./img/logo-avec.png" alt="AVEC"/>
                      {/* Logo
                      </a>
                  </li>
                </ul> */}
              </picture>
          </div>
      );
  }
}


// export default class Logo extends React.Component {

//     render(){
//       return(
//         <div className="logo">
//           <ul>
//             <li>
//               <a href="logo">
//                 Logo
//               </a>
//             </li>
//           </ul>
//         </div>
//       );
//     }
// }