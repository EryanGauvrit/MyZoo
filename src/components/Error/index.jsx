import TitlePage from '../TitlePage';

function Error() {
    return (
        <main>
            <TitlePage
                title='MyZoo - Erreur'
                color='bg-danger'
            />
            <p>
                La page n'existe pas
            </p>
        </main>
    )
};

export default Error;