import axios from 'axios';
import React, { Component } from 'react';
import AnimalCard from '../AnimalCard';

class Application extends Component {

    state = {
        animaux: null
    }

    componentDidMount = () => {
        axios.get('http://localhost/SERVEURANIMAUX/front/animaux')
            .then(reponse => {
                this.setState({ animaux: Object.values(reponse.data) });
            })
    }



    render() {
        return (
            <div className='container-fluid'>
                <div className='row no-gutters'>
                    {
                        this.state.animaux &&
                        this.state.animaux.map(animal => {
                            return (
                                <div className='col-12 col-md-6 col-xl-4' key={animal.id}>
                                    <AnimalCard animalDatas={animal} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

export default Application;