const Menu = ({ pizzaData }) => {
  return (
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
  );
};

export default Menu;
