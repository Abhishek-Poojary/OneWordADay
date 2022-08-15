import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavigationFooter = () => {


    return (<Fragment>
        <footer className="pt-4 border-top">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5>OneWordADay</h5>
                        <p>Learn one word a day to improve your vocabulary and speech</p>
                        <p>just click Learn and we will generate a Word with definition for you to Learn. You can also search a word for its definition</p>
                    </div>



                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5>Links</h5>
                        <Link to="/home" className="footer-link-unstyled">Home</Link>

                    </div>


                </div>
            </div>

            <div className="text-center py-3"><p className="customBrand">Sahara</p>©2022 Copyright</div>

        </footer>
    </Fragment>);
}


export default NavigationFooter;