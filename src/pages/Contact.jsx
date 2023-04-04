import { Component } from 'react';
import Form from '../components/Form';
import TitlePage from '../components/TitlePage';
import axios from "axios";

class Contact extends Component {

    handleSendEmail = (message) => {
        axios.post('http://localhost/SERVEURANIMAUX/front/sendMessage', message)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <main>
                <TitlePage
                    titlePage='MyZoo - Contact'
                    title='Contactez MyZoo'
                />
                <div className='container'>
                    <h2>Adresse :</h2>
                    XXXXXX XX XXXXXXXXXXXX XXXXXX XXX
                    <h2>Vous préfèrez nous écrire ? </h2>
                    <Form sendMail={this.handleSendEmail} />
                </div>
            </main>
        )
    }
};

export default Contact;