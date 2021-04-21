import React from 'react';
import Item from '../Item/Item';

const ItemList = (props) => {
    return (
        <>
            <div className='item-list'>
                <hr />
                 
                <ul> {
                    props.items.map(
                        item => <Item key={item.id} item={item} />
                    )
                }
                </ul>
            </div>
        </>
    )
};

export default ItemList;
