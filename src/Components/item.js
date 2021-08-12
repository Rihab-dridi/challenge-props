function Item(Props) {

    console.log(Props.product)
  return (
    <div style={{backgroundColor:"grey"}}  >
      <h3> {Props.product.name} </h3>
      <h4> {Props.product.price} </h4>
    </div>
  );
}

export default Item;
