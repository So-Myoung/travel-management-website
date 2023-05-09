import React from 'react';

export default function CartItemList() {
    
    <ul>
        {itemList.map(item => {
          return (
            <CartItem key={item.id} item={item} onChangeProps={onChangeProps} />
          );
        })}
      </ul>
}

// 상수데이터 목록
const DUMMY_ITEM_LIST = [
    {
      id: 1,
      name: '영귤섬 아이스티',
      packingState: '포장불가',
      price: 13000,
      amount: 1,
      isChecked: true,
    },
    {
      id: 2,
      name: '러블리 티 박스',
      packingState: '포장가능',
      price: 20000,
      amount: 1,
      isChecked: true,
    },
    {
      id: 3,
      name: '그린티 랑드샤 세트',
      packingState: '포장불가',
      price: 36000,
      amount: 1,
      isChecked: true,
    },
  ];

