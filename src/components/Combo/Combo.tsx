import React from 'react';
import { productNintendo } from "../../containers/App/App";
import { ComboProduct } from '../ComboProduct/ComboProduct';
import './Combo.css';

export interface ComboProps {
   id: number;
   comboTotal: number;
   client: string;
   confirm?: boolean;
   onConfirm?: () => void;
   changeName?: () => void
   products: productNintendo[];
   handleDeleteProduct?: (product: productNintendo) => void
}

export const Combo: React.FC<ComboProps> = ({ client, onConfirm, comboTotal, confirm, changeName, products, handleDeleteProduct }) => {


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

               <button className="button">
                  Eliminar
               </button>



               {confirm ? <button className="button">
                  Modificar
               </button> : <button onClick={onConfirm} className="button">
                  Confirmar
               </button>}
            </div>
            <div className={`productContainerCombo ${products.length===0 ? 'productContainerCombo--empty' : ''}`}>

            {products.length > 0 ? 
               products.map( ( item ) =>
               (
                  <ComboProduct
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