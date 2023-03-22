import TitlePage from '../TitlePage';

function Error() {
    return (
        <main>
            <TitlePage
                titlePage='MyZoo - Erreur'
                title='ERREUR - 404 !'
                color='bg-danger'
            />
            <p>
                La page n'existe pas
            </p>
        </main>
    )
};

export default Error;