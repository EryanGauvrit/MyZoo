import '../components/Header';
import TitlePage from '../components/TitlePage';
import banner from '../assets/banderole.png';
import HomeContent from '../components/HomeContent';

function Home() {
  return (
    <main>
      <img src={banner} alt='Bannière des animaux' className='img-fluid' />
      <TitlePage
        titlePage="MyZoo"
        title="Visitez le parc d'animaux MyZoo !"
      />
      <HomeContent />
    </main>
  );
}

export default Home;
