import Header from '../components/header/Header';
import TrainingList from '../components/training/TrainingList';
import Footer from '../components/footer/Footer';
import Container from '../components/container/Container';

function HomePage(){
   return(
    <div>
        <Header />
        <Container title='Training list'>
            <TrainingList />
        </Container>
        <Footer />
    </div>
   )
}
export default HomePage;
