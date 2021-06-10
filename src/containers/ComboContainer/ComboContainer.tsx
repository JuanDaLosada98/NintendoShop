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
    changeCount: Function;
    addMessage: boolean;
    changeName: () => void;
    handleDeleteProduct?: (product: productNintendo) => void
    handleEditCombo?: (combo: ComboProps) => void
    handleDeleteCombo?: (combo: ComboProps) => void
    handleDeleteEditCombo?: (combo: ComboProps) => void
    isEdit?: boolean;
    setAddMessage?: (set: boolean) => void

}



export const ComboContainer: React.FC<ComboContainerProps> = ({ onAdd, combo, editCombo, onConfirm, addMessage, changeName, handleDeleteProduct, changeCount, handleEditCombo, isEdit, handleDeleteCombo, handleDeleteEditCombo, setAddMessage}) => {
   /*  console.log(combo, editCombo); */
    return (
        <div className="comboContainer">
            {addMessage &&
                <React.Fragment>
                        <MessageAdd></MessageAdd>
                </React.Fragment>
            }
            {editCombo && <React.Fragment>

                <Combo
                    changeCount={changeCount}
                    id={editCombo.id}
                    comboTotal={editCombo.comboTotal}
                    client={editCombo.client}
                    confirm={editCombo.confirm}
                    onConfirm={onConfirm}
                    changeName={changeName}
                    products={editCombo.products}
                    handleDeleteProduct={handleDeleteProduct}
                    isEdit={isEdit}
                    handleDeleteCombo={handleDeleteEditCombo}


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
                    handleEditCombo={handleEditCombo}
                    isEdit={isEdit}
                    handleDeleteCombo={handleDeleteCombo}
                   


                ></Combo>);
            }
            )}

            {!editCombo && <button onClick={onAdd} className="comboAdd">Agregar Combo</button>}



        </div>
    );
}