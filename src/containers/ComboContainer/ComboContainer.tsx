import React from 'react';
import { Combo, ComboProps } from '../../components/Combo/Combo';
import { MessageAdd } from '../../components/MessageAdd/MessageAdd';
import { productNintendo } from "../../containers/App/App";

import './ComboContainer.css'

interface ComboContainerProps {
    onAdd: () => void;
    onConfirm?: () => void;
    combo: ComboProps[];
    editCombo: ComboProps | null;
    addMessage: boolean;
    changeName: () => void;
    handleDeleteProduct?: (product: productNintendo) => void

}



export const ComboContainer: React.FC<ComboContainerProps> = ({ onAdd, combo, editCombo, onConfirm, addMessage, changeName, handleDeleteProduct }) => {
    console.log(combo, editCombo);
    return (
        <div className="comboContainer">
            {addMessage &&
                <React.Fragment>
                        <MessageAdd></MessageAdd>
                </React.Fragment>
            }
            {editCombo && <React.Fragment>

                <Combo

                    id={editCombo.id}
                    comboTotal={editCombo.comboTotal}
                    client={editCombo.client}
                    confirm={editCombo.confirm}
                    onConfirm={onConfirm}
                    changeName={changeName}
                    products={editCombo.products}
                    handleDeleteProduct={handleDeleteProduct}


                ></Combo>

            </React.Fragment>}

            {combo.map(({ id, comboTotal, client, confirm, products}) => {
                console.log(id)

                return (<Combo

                    key={id}
                    id={id}
                    comboTotal={comboTotal}
                    client={client}
                    confirm={confirm}
                    products={products}
                
                   


                ></Combo>);
            }
            )}

            {!editCombo && <button onClick={onAdd} className="comboAdd">Agregar Combo</button>}



        </div>
    );
}