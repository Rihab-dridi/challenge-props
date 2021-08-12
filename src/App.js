import "./App.css";
import ItemList from "./Components/ItemList";
function App() {

 let itemArray= [
  {
    imgSrc: `https://images.frandroid.com/wp-content/uploads/2019/08/iphone-11-pro-2019-frandroid.png`,
    name: 'Iphone 11',
    price: `1 349,99 $`,
  },
  {
    imgSrc: `https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/12/razer-blade-stealth-2019-frandroid.png?resize=580,580`,
    name: 'Razer Blade',
    price: `7 633,64 $`,
  },
  {
    imgSrc: `https://purepng.com/public/uploads/large/purepng.com-audi-r8audicars-961524670148fabn4.png`,
    name: 'audi R8',
    price: `216 245 $`,
  },
]

  return (
    <div className='App'>
      <h1 style={{ color: "red" }}> Challenge Props</h1>
     <ItemList products={itemArray}/>
    </div>
  );
}

export default App;
