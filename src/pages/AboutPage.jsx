import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Container from '../components/container/Container';
import GoBack from "../components/go-back/GoBack";

function AboutPage() {
    return (
        <div>
            <Header />
            <Container title='About me'>
                <About />
                <GoBack />
            </Container>
            <Footer />
        </div>
    )
}
export default AboutPage;
