import React from 'react';

const OrderSummary = ({ ingredients }) => {

    const ingredientSummary = Object.keys(ingredients)
        .map((igKey, i) => {
           return (
               <li key={igKey + i}>
                   <span style={{textTransform: 'capitalize', fontWeight: '700'}}>{igKey}</span>: {ingredients[igKey]}
               </li>
           )
        });

    return (
        <>
            <h3>Your Order</h3>
            <p>Burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </>
    )
};

export default OrderSummary;