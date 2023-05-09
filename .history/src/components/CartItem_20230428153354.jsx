import React from 'react';

export default function CartItem() {
    const amountInputHandler = event => {
        onChangeProps(item.id, 'amount', +event.target.value);
      };
    
      const amountIncreaseHandler = event => {
        event.preventDefault();
        onChangeProps(item.id, 'amount', item.amount + 1);
      };
    
      const amountDecreaseHandler = event => {
        event.preventDefault();
        onChangeProps(item.id, 'amount', item.amount - 1);
      };
    
      useEffect(() => {
        setIsBtnValid(item.amount > 1);
      }, [item.amount]);
    return (
        <div>
            
        </div>
    );
}

