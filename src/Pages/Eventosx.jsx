import Layout from '../Componentes/Layout'
import Slide from '../Componentes/main/Slide';

function Eventos() {
    return (
        <Layout>
            <div className="eventos">
          <Slide/>
          <div className="sobre">
          <h2>Informações, Eventos e Parcerias</h2>
          <p className="sobre__paragrafo">
          A Avec junto a parceiros realiza eventos e multirões, ministra cursos profissionalizantes de algumas modalidades com o apoio do Fundo Social De Solidariedade De São Paulo, executa o projeto VivaLeite realizando entrega de leite a comunidade cadastrada em parceria com o Governo Do Estado de São Paulo, e também fomentou uma parceria com a Associação Tzu-Chi no Brasil, no qual promovem em conjunto ações sociais com atendimento médico diversos, distribuição de remédios, óculos, cadeiras de roda, cestas básicas, colchões, realizando palestras e atividades. Também em parceria com o CRAS, encarrega-se de orientar e encaminhar os usuários para que sejam atendidos e cadastrados na rede sócio assistencial e usufrua de seus direitos. Com isso, a AVEC contribui para o bem comum e possibilita o seu objetivo principal: Melhorar a qualidade de vida daqueles que se encontram a margem da sociedade, contribuindo para que possam superar a estatística social a que estão inseridos e mais tarde sejam protagonistas de suas histórias.
          </p>
        </div>
        </div>
        </Layout>
    );
}
export default Eventos;