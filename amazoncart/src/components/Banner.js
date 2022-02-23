import React from "react";
import { Row, Col, Button, Image } from 'react-bootstrap';

const Banner = () => {

    return (
        <div className="mx-1 px-3 my-3 py-3 body-banner fluid">
            <Row>
                <Col xs={1} className="align-self-center">
                    <Button id="body-banner-button">Scopri di più</Button>
                </Col>
                <Col xs={10} className="align-self-center">
                    <div>
                    <span className="bold" > Matteo, approfitta di questa offerta prova: buono sconto di 6€ con 60€ di ricarica.</span> Un altro pratico metodo di pagamento su Amazon.it. Amazon Ricarica
                    </div>
                </Col>
                <Col xs={1} className="align-self-center d-flex justify-content-end">
                    <Image src={'https://images-na.ssl-images-amazon.com/images/G/29/gc/2019/Evergreen_ASV/IT_ASV_Piggy_Logo_123x100._CB465702586_.png'} alt="prodotto" />
                </Col>
            </Row>
        </div>
    )
}

export default Banner