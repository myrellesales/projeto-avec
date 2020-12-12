import React from 'react';
import '../Services/dados.js'
// import '../Styles/Pages/filmes.css'
// import Sidebar from '../Componentes/Sidebar'


const ListaInterna = () => {

    return(
        <>
        {/* <Sidebar/> */}
            <div id= "container">             
                {eventos.map(eventos=>{
                    return <div className="card" key={eventos.id}>
                        <h3>Título: {eventos.nome}</h3>
                        <p>Gênero: {eventos.genero}</p>
                        <img src={eventos.capa} alt="capa"/>
                    </div>
                })}             
            </div>
        </>
    )
}
export default ListaInterna;






// export default class Lista extends React.Component {

//     render(){
//       return(
//         <div className="lista">
//           <ul>
//             <li>
//               <a href="evento_1">
//                 Evento de doação
//               </a>
//             </li>
//             <li>
//               <a href="evento_1">
//                 Evento de doação
//               </a>
//             </li>
//           </ul>
//         </div>
//       );
//     }
// }