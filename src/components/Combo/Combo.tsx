import React from 'react';
import { productNintendo } from "../../containers/App/App";
import { ComboProduct } from '../ComboProduct/ComboProduct';
import './Combo.css';

export interface ComboProps {
   id: number;
   comboTotal: number;
   changeCount?: Function;
   client: string;
   confirm?: boolean;
   isEdit?: boolean;
   onConfirm?: () => void;
   changeName?: () => void
   products: productNintendo[];
   handleDeleteProduct?: (product: productNintendo) => void
   handleEditCombo?: (combo: ComboProps) => void
   handleDeleteCombo?: (combo: ComboProps) => void
   handleDeleteEditCombo?: (combo: ComboProps) => void
}

export const Combo: React.FC<ComboProps> = ({id, client, onConfirm, comboTotal, confirm, changeName, products, handleDeleteProduct, changeCount, handleEditCombo, isEdit, handleDeleteCombo, handleDeleteEditCombo }) => {

   const handleEdit = () => {
      if (!!handleEditCombo) {
         handleEditCombo({
             id, comboTotal, client, products
         })
     }
   }
   const handleDelete = () => {
      if (!!handleDeleteCombo) {
         handleDeleteCombo({
             id, comboTotal, client, products
         })
     }
     if (!!handleDeleteEditCombo) {
      handleDeleteEditCombo({
          id, comboTotal, client, products
      })
  }
   }
   return (
      <div className="combo">
         <div className="comboFrame">
            <div className="topContainer">
 
               <div className={`data ${!confirm ? 'data--pointer' : ''}`} onClick={changeName}> 
                  Cliente: <p>&nbsp;{client}</p>
               </div>
               <div className="data">
                  <img className='coin' src='/images/data/mariocoin.png' alt='' />
                  &nbsp;$&nbsp;<p>{comboTotal}</p>
               </div>

               <button onClick={handleDelete} className="button">
                  Eliminar
               </button>

               {!confirm && comboTotal !== 0 ? <button onClick={onConfirm} className="button">
                  Confirmar
               </button> : isEdit ? "" : <button onClick={handleEdit} className="button"> 
                  Modificar
               </button> }
               
               
             
             
            </div>
            <div className={`productContainerCombo ${products.length===0 ? 'productContainerCombo--empty' : ''}`}>

            {products.length > 0 ? 
               products.map( ( item ) =>
               (
                  <ComboProduct
                  count={item.count}
                  changeCount={changeCount}
                  image={item.image}
                  product={item.type}
                  price={item.price}
                  name={item.name}
                  confirm={confirm}
                  id={item.id}
                  type={item.type}
                  handleDeleteProduct={handleDeleteProduct}
                  >
                  </ComboProduct>
                  //<p>producto{item.name}</p>
               ))
               :
               <div className="emptyCombo">Agrega productos a tu combo</div>
            }
               

            </div>
         </div>
      </div>

   );
}