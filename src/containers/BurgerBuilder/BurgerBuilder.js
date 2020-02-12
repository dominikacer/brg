import React from 'react';
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends React.Component {
    render() {
        return (
          <>
              <Burger />
              <div>Build controls</div>
          </>
        );
    }
}

export default BurgerBuilder;