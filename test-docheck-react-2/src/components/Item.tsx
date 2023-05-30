import {ReactElement, useContext, useEffect} from 'react';
import { ItemContext } from '../contexts/ItemContext';

function Item(): ReactElement {

  const context = useContext(ItemContext);

  useEffect(() => {
    console.log(context?.item, "<<<< ini isi items");
  }, []);

  return (
    <div>
      <p>{context?.item.name}</p>
      <p>{context?.item.qty}</p>
      <p>{context?.item.price}</p>
    </div>
  )
}

export default Item