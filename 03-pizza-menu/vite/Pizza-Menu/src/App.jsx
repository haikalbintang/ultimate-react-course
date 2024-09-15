import { pizzaData } from "../public/data";
import Description from "./components/Description";
import Heading1 from "./components/Heading1";
import Heading2 from "./components/Heading2";

export default function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Heading1>— FAST REACT PIZZA CO. —</Heading1>
      <Heading2>OUR MENU</Heading2>
      <Description>
        Authentic Italian cuisine. 6 craetive dishes to choose drom. All deom
        our stone oven, akk organic, all delicious
      </Description>
      <div className="min-w-[600px] max-w-2xl">
        <ul className="flex flex-wrap justify-between">
          {pizzaData.map((pizza) => (
            <li key={pizza.name} className="flex w-[300px] py-3">
              <img
                className="h-32 w-32 mr-3"
                src={pizza.photoName}
                alt={pizza.name}
              />
              <div>
                <h3 className="my-2 text-xl font-semibold italic">
                  {pizza.name}
                </h3>
                <p className="my-2 text-xs">{pizza.ingredients}</p>
                <p className="my-2 font-semibold">
                  {pizza.soldOut ? "SOLD OUT" : pizza.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Description>
        We are open until 22:00. Come visit us or order online.
      </Description>
      <button className="px-7 py-3 bg-yellow-400 mb-10">Order now</button>
    </main>
  );
}
