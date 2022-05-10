import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'
const ItemList = ({ products }) => {

    return (
        

<div className='contenedorItemList'>
            {
            products.length > 0 ? (products.map((item) => ( 
                <>
            <Item
            key={item.id}
            id={item.id}
            imagen={item.imagen}
            nombre={item.nombre}
            precio={item.precio}
            descripcion={item.descripcion}
            alt={item.alt}
            />
            </>
            )
            )) : (
                
                    <h1><div class="loadingio-spinner-ellipsis-zb3lckypqk"><div class="ldio-052vxcpm2cq5">
                    <div></div><div></div><div></div><div></div><div></div>
                    </div></div></h1>
                )
                }
        </div>
        
    );
};
export default ItemList;