import React from 'react';
import './ComboProduct.css'
import { ImageSrcProduct } from '../../utils/ImageSrcProduct';

import { NintendoSwitchPoductProps } from '../NintendoSwitchProduct/NintendoSwitchProduct';
import { Count } from '../Count/Count';
import { productNintendo } from '../../containers/App/App';

export type ComboProductProps = Omit<NintendoSwitchPoductProps, 'joyConSet' | 'joyConL' | 'joyConR' | 'addMessage' | 'createdCombos' | 'numberOfProducts'>;
export type product = productNintendo & {
    product?: string;
    confirm?: boolean,
    handleDeleteProduct?: (product: productNintendo) => void
    
}
export const ComboProduct: React.FC<product> = ({ name, product, image, confirm, price, handleDeleteProduct, type, id }) => {
    const imageSrc = ImageSrcProduct(product);
    const [ count, setCount ] = React.useState(1);
 
    var temporalCount: number;


     const handleDecrease = () => {
      setCount(count - 1);
      temporalCount=count-1;
      if((temporalCount) === 0){
        
      }
    }
    const handleIncrease = () => {
      setCount(count + 1);
    }

    const delet = () => {
        if (!!handleDeleteProduct) {
            handleDeleteProduct({
                id, name, price, image, type,
            })
        }
    }
    return <div className="comboProductContainer">
        <img className="comboProductImage" src={image} alt="" />
        {!confirm && <button onClick={delet} className="deleteComboProduct">
            <img src="/images/data/cancel.png" alt="" className="deleteComboProductImg" />
        </button>}
        <div className="productTypeCombo">
            <img src={imageSrc} className="productTypeComboImg" alt="" />
        </div>
        <div className="comboProductName">

            <div className="textComboProduct">

                {name}
            </div>
            <div className="counterComboProductContainer">

                <div className="counterComboProduct">
                    <Count
                        count={count}
                        onDecrease={handleDecrease}
                        onIncrease={handleIncrease}
                        confirm={confirm}
                    ></Count>
                </div>
            </div>
        </div>
        <div className="infoProductCombo">
            <div className="coinComboProduct">

                <img src="/images/data/mariocoin.png" alt="" className="coinComboProductImg" />
            </div>
            <div className="priceComboProduct">
                ${price}
            </div>

        </div>

    </div>;
}