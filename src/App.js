import Cart from "../src/components/Cart"
import Main from "../src/components/Main"
import FullCart from "../src/components/Bag/fullCart/FullCart"
import OrderPlaced from "../src/components/orderPlaced/OrderPlaced"

import { useContext } from "react"
import { AccountContext } from "./context/AccountProvider"
import {Box} from "@mui/material"
import IndivisualItems from "./components/Item/IndivisualItems"


function App() {
  const {cartOpen,itemsInCart,orderPlaced,choseItem}=useContext(AccountContext);

  const isCartEmpty=itemsInCart.length===0;

  return (
    <Box>
      {
        cartOpen?
          <Box>
            {
              isCartEmpty?
                (<Cart></Cart>)
                :
                <Box>
                  {
                    orderPlaced?
                      (<OrderPlaced></OrderPlaced>)
                      :
                      (<FullCart></FullCart>)
                  }
                </Box>
                
            }
          </Box>
          :
          <Box>
            {
              choseItem?
                (<IndivisualItems></IndivisualItems>)
                :
                (<Main></Main>)
            }
          </Box>
          
      }
    </Box>
    
    
  );
}

export default App;
