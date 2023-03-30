import Application from '../components/Application';
import TitlePage from '../components/TitlePage';

function Parc() {
    return (
        <main>
            <TitlePage
                titlePage='Les Animaux du parc'
                title='Les Animaux du parc'
            />
            <Application />
        </main>
    )
};

export default Parc;