import Styles from "./Footer.module.css";

export const Footer = () => {
    return (

        <div className={Styles.footer}>

            <div className={Styles.flex}>

                <div className={Styles.elementLeft}>
                    <h3>FoodFilter</h3>

                    <h4>Resources</h4>
                    <p>Strapi</p>
                    <p>Strapi</p>
                    <p>Strapi</p>
                </div>
                <div className={Styles.elementRight}>
                    <br/><br/>
                    <h4>Social Media</h4>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Github</p>
                </div>
            </div>
        </div>

    );
};