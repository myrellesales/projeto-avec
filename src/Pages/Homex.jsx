import Layout from '../Componentes/Layout'
import Sobre from '../Componentes/header/Sobre';

function Home() {
    return (
        <div>
            <Layout>
            <div>
            <picture>
             <img className= "formatura" src="../img/formatura.jpg" alt="Formatura-Avec"/>
              </picture>
        <Sobre/>  
        </div>
            </Layout>
        </div>
    );
}

export default Home;