import { withFormik } from 'formik'; // npm install --save formik yup
import * as Yup from 'yup';


function Form(props) {

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom : </label>
                <input
                    type="text"
                    id="nom"
                    className="form-control"
                    placeholder="votre nom"
                    name="nom"
                    required
                    onChange={props.handleChange}
                    value={props.values.nom}
                    onBlur={props.handleBlur}
                />
                {
                    props.touched.nom && props.errors.nom && <span style={{ color: 'red' }}>{props.errors.nom}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Adresse email : </label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="votre email"
                    name="email"
                    required
                    onChange={props.handleChange}
                    value={props.values.email}
                    onBlur={props.handleBlur}
                />
                {
                    props.touched.email && props.errors.email && <span style={{ color: 'red' }}>{props.errors.email}</span>
                }
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Messages : </label>
                <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    required
                    onChange={props.handleChange}
                    value={props.values.message}
                    onBlur={props.handleBlur}
                ></textarea>
                {
                    props.touched.message && props.errors.message && <span style={{ color: 'red' }}>{props.errors.message}</span>
                }
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.handleSubmit}>Envoyer</button>
        </form>
    )
};

export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: ""
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, 'Le nom doit contenir plus de 5 caractères')
            .required('le nom est obligatoire'),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("L'email est obligatoire"),
        message: Yup.string()
            .min(50, "le massage doit contenir 50 caractères au minimum")
            .max(200, "le massage doit contenir 200 caractères au maximum")
            .required("Veuillez entrer votre message"),

    }),
    handleSubmit: (values, { props }) => {
        const message = {
            nom: values.nom,
            email: values.email,
            contenu: values.message
        }
        props.sendMail(message);
    }
})(Form);