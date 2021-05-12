import React from 'react';
import { InsideCreatedCombos } from '../InsideCreatedCombos/InsideCreatedCombos';
import './CreatedCombos.css'

interface CreatedCombosProps {
    visible: boolean;
    onCloseWindow: () => void;
}

export const CreatedCombos: React.FC<CreatedCombosProps> = ({ visible, onCloseWindow }) => {

    return <div className={`createdModal ${visible ? 'createdModal-visible' : ''}`}>
        <img src="/images/data/mariodata.png" alt="" className="bowsyCreated" />
        <div className="createdModalContainer">
            <div className="innerCreatedContainer">
                <h2 className="titleInputCreated">COMBOS CREADOS</h2>
                <button onClick={onCloseWindow} className="closeComboCreated">

                    <img src="/images/data/cancel.png" alt="" className="deleteComboProductImg" />
                </button>
                <div className="titleParagrafCreated">
                    <InsideCreatedCombos></InsideCreatedCombos>


                </div>


            </div>
        </div>
    </div>;
}