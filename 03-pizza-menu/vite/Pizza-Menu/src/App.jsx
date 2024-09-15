import { pizzaData } from "../public/data";
import ButtonYellow from "./components/ButtonYellow";
import Description from "./components/Description";
import Heading1 from "./components/Heading1";
import Heading2 from "./components/Heading2";
import Menu from "./components/Menu";

export default function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Heading1>— FAST REACT PIZZA CO. —</Heading1>
      <Heading2>OUR MENU</Heading2>
      <Description>
        Authentic Italian cuisine. 6 craetive dishes to choose drom. All deom
        our stone oven, akk organic, all delicious
      </Description>
      <Menu pizzaData={pizzaData} />
      <Description>
        We are open until 22:00. Come visit us or order online.
      </Description>
      <ButtonYellow />
    </main>
  );
}
