import Item from './item'

function ItemList(props) {
 

 const arr=props.products

  return (
    <div   style={{backgroundColor:"lightgreen"}}  >
      <h2>Product list</h2>
{
arr.map(el=> <Item  product={el}   />    )
}
     
    </div>
  );
}

export default ItemList;
