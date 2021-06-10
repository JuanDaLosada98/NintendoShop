import React from 'react';
import { ComboProps } from '../Combo/Combo';
import { InsideCreatedCombos } from '../InsideCreatedCombos/InsideCreatedCombos';
import './CreatedCombos.css'

interface CreatedCombosProps {
    visible: boolean;
    onCloseWindow: () => void;
    combos: ComboProps[];
}

export const CreatedCombos: React.FC<CreatedCombosProps> = ({ visible, onCloseWindow, combos }) => {

    return <div className={`createdModal ${visible ? 'createdModal-visible' : ''}`}>
        <img src="/images/data/mariodata.png" alt="" className="bowsyCreated" />
        <div className="createdModalContainer">
            <div className="innerCreatedContainer">
                <h2 className="titleInputCreated">COMBOS CREADOS</h2>
                <button onClick={onCloseWindow} className="closeComboCreated">
                    <img src="/images/data/cancel.png" alt="" className="deleteComboProductImg" />
                </button>
                <div className={`titleParagrafCreated ${combos.length < 1 ? 'titleParagrafCreated--noCombo' : ''}`}>
                    {combos.map(({ client, id, comboTotal, products }) => {
                        return <InsideCreatedCombos
                            client={client}
                            id={id}
                            comboTotal={comboTotal}
                            products={products}
                        ></InsideCreatedCombos>;
                    })}
                    {combos.length < 1 && <div className="emptyCombo"> Aun no tienes combos confirmados</div>}
                </div>
            </div>
        </div>
    </div>;
}