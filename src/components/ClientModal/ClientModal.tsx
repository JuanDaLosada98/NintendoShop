import React from 'react';
import './ClientModal.css';

interface ClientModalProps {
    visible: Boolean;
    onAddName: (name:string) => void;
}

export const ClientModal: React.FC<ClientModalProps> = ({ visible, onAddName }) => {

    const handleSubmit:React.FormEventHandler<HTMLFormElement> = (event:any) => {
        event.preventDefault();
        onAddName(event.target.name.value);
        event.target.name.value='';
    }

    return <div className={`clientModal ${visible ? 'clientModal-visible' : ''}`}>
        <img src="/images/data/bowsy.png" alt="" className="bowsy" />
        <div className="clientModalContainer">
            <div className="innerClientContainer">
                <div className="titleParagraf">

                <h2 className="titleInputClient">AGREGA EL NOMBRE <br/>DE TU CLIENTE</h2>
                <div className="paragraf">
                    <p> 

                    Los productos de Nintendo Switch que agregues estarán a nombre del cliente. Este lo puedes modificar en el espacio de Cliente. 
                    </p> 
                </div>
                </div>
                <form onSubmit={handleSubmit} className="clientInputs">

                    <input name="name" type="text" className="clientInput" placeholder="Nombre del cliente" />
                    <button type="submit" className="clientConfirm">Confirmar</button>
                    
                </form>

            </div>
        </div>
    </div>;
}