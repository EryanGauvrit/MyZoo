import logo from '../../assets/logo.png';

function HomeContent() {
    return (
        <div className="container">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit, delectus molestiae, quod impedit explicabo consequuntur commodi asperiores nisi molestias, quidem iure quisquam ab deserunt veritatis sunt. Quibusdam, adipisci exercitationem?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit, delectus molestiae, quod impedit explicabo consequuntur commodi asperiores nisi molestias, quidem iure quisquam ab deserunt veritatis sunt. Quibusdam, adipisci exercitationem?
            </p>
            <div className="row no-gutteurs align-items-center">
                <div className="col-12 col-md-6">
                    <img src={logo} alt="Logo" className='img-fluid' />
                </div>
                <div className="col-12 col-md-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit, delectus molestiae, quod impedit explicabo consequuntur commodi asperiores nisi molestias, quidem iure quisquam ab deserunt veritatis sunt. Quibusdam, adipisci exercitationem?
                </div>
                <div className="col-12 col-md-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit, delectus molestiae, quod impedit explicabo consequuntur commodi asperiores nisi molestias, quidem iure quisquam ab deserunt veritatis sunt. Quibusdam, adipisci exercitationem?
                </div>
                <div className="col-12 col-md-6">
                    <img src={logo} alt="Logo" className='img-fluid' />
                </div>
            </div>
        </div>
    )
};

export default HomeContent;