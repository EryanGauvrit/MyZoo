import axios from 'axios';
import React, { Component } from 'react';
import AnimalCard from '../AnimalCard';
import Button from '../Button';

class Application extends Component {

    state = {
        animaux: null,
        filtreFamille: null,
        filtreContinent: null,
        listeFamilles: null,
        listeContinents: null
    }

    loadData = () => {
        const famille = this.state.filtreFamille ? this.state.filtreFamille : "-1";
        const continent = this.state.filtreContinent ? this.state.filtreContinent : "-1";
        axios.get(`http://localhost/SERVEURANIMAUX/front/animaux/${famille}/${continent}`)
            // axios.get(`https://myzoo-admin.eryan-portfolio.com/front/animaux/${famille}/${continent}`)
            .then(reponse => {
                this.setState({ animaux: Object.values(reponse.data) });
            })
    }

    componentDidMount = () => {
        this.loadData();
        axios.get(`http://localhost/SERVEURANIMAUX/front/continents`)
            // axios.get(`https://myzoo-admin.eryan-portfolio.com/front/continents`)
            .then(reponse => {
                this.setState({ listeContinents: Object.values(reponse.data) });
            })
        axios.get(`http://localhost/SERVEURANIMAUX/front/familles`)
            // axios.get(`https://myzoo-admin.eryan-portfolio.com/front/familles`)
            .then(reponse => {
                this.setState({ listeFamilles: Object.values(reponse.data) });
            })
    }

    componentDidUpdate = (oldProps, oldState) => {
        if (oldState.filtreFamille !== this.state.filtreFamille || oldState.filtreContinent !== this.state.filtreContinent) {
            this.loadData();
        }
    }

    handleSelectionFamille = (idFamille) => {
        if (idFamille === "-1") this.handleResetFiltreFamille();
        else this.setState({ filtreFamille: idFamille });
    }
    handleSelectionContinent = (idContinent) => {
        if (idContinent === "-1") this.handleResetFiltreContinent();
        else this.setState({ filtreContinent: idContinent });
    }

    handleResetFiltreFamille = () => {
        this.setState({ filtreFamille: null })
    }
    handleResetFiltreContinent = () => {
        this.setState({ filtreContinent: null })
    }


    render() {

        let nomFamilleFiltre = '';
        if (this.state.filtreFamille) {
            const numCaseFamilleFiltre = this.state.listeFamilles.find(famille =>
                famille.famille_id === parseInt(this.state.filtreFamille)
            )
            nomFamilleFiltre = numCaseFamilleFiltre.famille_libelle;
        }

        let nomContinentFiltre = '';
        if (this.state.filtreContinent) {
            const numCaseContinentFiltre = this.state.listeContinents.find(continent =>
                continent.continent_id === parseInt(this.state.filtreContinent)
            )
            nomContinentFiltre = numCaseContinentFiltre.continent_libelle;
        }

        return (
            <React.Fragment>
                {
                    <div className='container-fluid'>
                        <span>Filtres : </span>
                        <select onChange={(event) => this.handleSelectionFamille(event.target.value)}>
                            <option value="-1" selected={this.state.filtreFamille === null && "selected"}>Familles</option>
                            {
                                this.state.listeFamilles && this.state.listeFamilles.map(famille => {
                                    return (
                                        <option
                                            value={famille.famille_id}
                                            selected={this.state.filtreFamille === famille.famille_id && "selected"}
                                            key={famille.famille_id}
                                        >{famille.famille_libelle}</option>
                                    )
                                })
                            }
                        </select>
                        <select onChange={(event) => this.handleSelectionContinent(event.target.value)}>
                            <option value="-1" selected={this.state.filtreContinent === null && "selected"}>Continents</option>
                            {
                                this.state.listeContinents && this.state.listeContinents.map(continent => {
                                    return (
                                        <option
                                            value={continent.continent_id}
                                            selected={this.state.filtreContinent === continent.continent_id && "selected"}
                                            key={continent.continent_id}
                                        >{continent.continent_libelle}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            this.state.filtreFamille &&
                            <Button
                                typeBtn="btn-secondary"
                                clic={this.handleResetFiltreFamille}
                            >
                                {nomFamilleFiltre} &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Button>
                        }
                        {
                            this.state.filtreContinent &&
                            <Button
                                typeBtn="btn-secondary"
                                clic={this.handleResetFiltreContinent}
                            >
                                {nomContinentFiltre} &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </Button>
                        }
                    </div>
                }

                <div className='container-fluid'>
                    <div className='row no-gutters'>
                        {
                            this.state.animaux &&
                            this.state.animaux.map(animal => {
                                return (
                                    <div className='col-12 col-md-6 col-xl-4' key={animal.id}>
                                        <AnimalCard
                                            animalDatas={animal}
                                            filtreFamille={this.handleSelectionFamille}
                                            filtreContinent={this.handleSelectionContinent} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
};

export default Application;