import React from 'react';
import { productNintendo } from '../../containers/App/App';
import { ImageSrcProduct } from '../../utils/ImageSrcProduct';
import { Count } from '../Count/Count';

import './NintendoSwitchProduct.css';

export interface NintendoSwitchPoductProps {

  product: string;
  name: string;
  price: number;
  image: string;
  confirm?: boolean;
  numberOfProducts?: number;
  createdCombos?: boolean;
  choose?: Boolean;
  joyConSet?: Boolean;
  joyConL?: Boolean;
  joyConR?: Boolean;
  addMessage?: Boolean;
  handleAddProductsToCombo?: (product: productNintendo) => void
  handleDeleteProduct?: (product: productNintendo) => void
  handleDecrease?: () => void
  handleIncrease?: () => void
  chosen?: boolean;
  count: number;
  // onDelete: (id: string|number) => void;
  // id: number;
}

export type product = productNintendo & {
  addMessage?: Boolean;
  handleAddProductsToCombo?: (product: productNintendo) => void;
  handleDeleteProduct?: (product: productNintendo) => void

  numberOfProducts?: number;
  createdCombos?: boolean;


}

export const NintendoSwitchProduct: React.FC<product> = ({ name, type, price, image, id, addMessage, handleAddProductsToCombo, createdCombos, numberOfProducts }) => {

  const imageSrc = ImageSrcProduct(type);



  const add = () => {
    if (!!handleAddProductsToCombo) {
      handleAddProductsToCombo({
        id, name, price, image, type,
      })
    }
  }

  /* 
  const handleDelete = () => {
    onDelete(id);
  }
  */


  return (
    <div className='NintendoSwitchProduct' >
      <div className="imageContainer">
        <img className="productImage" src={image} alt="" />
      </div>
      <div className="productContainer">
        <div className="imageC">
          <img className="productType" src={imageSrc} alt="" />

        </div>{createdCombos ? <p className="addSomeCombos">{numberOfProducts} unidad(es)</p> : addMessage ? <p className="addSomeCombos">agrega un combo</p> : <button onClick={add} className="choose">Agregar</button>}

      </div>
      <h1 >{name}</h1>
      <div className="priceCountContainer">
        <p className="price">${price}</p>
       
      </div>
      <p className="productTypeP">{type}</p>



    </div>);

}