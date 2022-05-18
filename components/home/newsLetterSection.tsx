import React, { useState } from 'react';
import { ButtonLink } from '../../uiComponents';

const NewsLetterSection = () => {
    const [isSent, setIsSent] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
      };

      const validateEmail = (email: string): Boolean => {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      }

      const addMailNotion = async (email: string) => {
        const response = await fetch(`/api/notion?email=${email}`)
        return response.ok
      }
  
        return (
            <section id="newsletter-section">
                <div className="fr-container">
                    <h2>Newsletter</h2>
                    <div className="grid-newsletter">
                        <div className="text-nl">
                            <p>
                                La newsletter de la Ressourcerie est orientée sur une thématique mensuelle et présente des cas d'usages et articles de vulgarisation sélectionnés parmi nos productions,
                                une ressource technique en lien avec les productions sélectionnées, et notre veille sur les initiatives tech' de la sphère travail (pour élargir le spectre) !
                            </p>
                        </div>
                        <div className="cta-nl">
                            <div>
                                <div className="div-input">
                                    <input
                                        className="fr-input"
                                        type="text"
                                        id="newsletter-input"
                                        name="newsletter-input"
                                        onChange={handleForm}
                                    />
                                </div>
                                {isSent ? <div>{message}</div> : <br />}
                                <br />
                                <ButtonLink onClick={
                                    () => {
                                        setIsSent(true)
                                        setMessage(validateEmail(email) ? 'Merci pour votre inscription!' : 'Cette adresse mail semble invalide')
                                        if(validateEmail(email)) {
                                            addMailNotion(email)
                                        }
                                    }
                                } size="large" alt>
                                    <span className="layout-center">
                                        Je m'inscris à la newsletter!
                                    </span>
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
        );
  };
  export default NewsLetterSection;