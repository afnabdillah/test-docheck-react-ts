import { createContext, ReactElement, useState } from "react";

type ItemContextType = {
  item: {
    name: string,
    qty: number,
    price: string
  }
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

function ItemProvider(props: any): ReactElement {

  const [item] = useState({
    name: "Bread",
    qty: 20,
    price: "$3",
  })

  return (
    <ItemContext.Provider value={{item}}>
      {props.children}
    </ItemContext.Provider>
  )
}

export { ItemContext, ItemProvider };
