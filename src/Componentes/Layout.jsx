import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

function Layout(props){
    return (
        <div>
            <Nav />
            <Header />
            
            <div class="main">
                {props.children}
            </div>

            <Footer />
        </div>
    );
}


export default Layout;
