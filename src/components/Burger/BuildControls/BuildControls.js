import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Salad',
        type: 'salad',
    },
    {
        label: 'Bacon',
        type: 'bacon',
    },
    {
        label: 'Cheese',
        type: 'cheese',
    },
    {
        label: 'Meat',
        type: 'meat',
    },
];

const toFixedHelper = (num, digits) => {
  return num.toFixed(digits);
};

const BuildControls = ({ addIngredient, removeIngredient, disabled, price }) => (
    <div className={classes["BuildControls"]}>
        <p>Current price = <strong>{toFixedHelper(price, 2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => addIngredient(ctrl.type)}
                removed={() => removeIngredient(ctrl.type)}
                disabled={disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default BuildControls;