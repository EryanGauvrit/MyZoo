import Button from "../Button";


function AnimalCard({ animalDatas, filtreFamille, filtreContinent }) {
    return (
        <div className="card mb-3">
            <h3 className="card-header">{animalDatas.id} - {animalDatas.nom}</h3>
            <div className="card-body">
                <div className="card-text" >{animalDatas.description}</div>
            </div>
            <div style={{ "height": "100px" }} className='text-center'>
                <img src={animalDatas.image} alt={animalDatas.nom} className="img-fluid h-100" />
            </div>
            <div className="card-body">
                <h3>
                    Famille : <Button typeBtn="btn-dark" clic={() => filtreFamille(animalDatas.famille.idFamille)}>{animalDatas.famille.libelleFamille.toUpperCase()}</Button>
                </h3>
                <div>{animalDatas.famille.descriptionFamille}</div>
            </div>
            <div className="card-body">
                <h3>Continents : </h3>
                {
                    animalDatas.continents.map(continent => {
                        let colorBtn = "";
                        switch (continent.idContinent) {
                            case 1: colorBtn = "btn-primary";
                                break;
                            case 2: colorBtn = "btn-danger";
                                break;
                            case 3: colorBtn = "btn-warning";
                                break;
                            case 4: colorBtn = "btn-success";
                                break;
                            case 5: colorBtn = "btn-info";
                                break;
                            default: colorBtn = "btn-secondary";
                        }
                        return <Button
                            typeBtn={colorBtn}
                            css='m-1'
                            key={continent.idContinent}
                            clic={() => filtreContinent(continent.idContinent)}
                        >{continent.libelleContinent.toUpperCase()}</Button>
                    })
                }
            </div>
        </div>
    )
};

export default AnimalCard;