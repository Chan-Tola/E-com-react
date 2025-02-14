import { useParams } from "react-router-dom";
import { products } from "../Data/CardData";

const CardDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { name, price, image, size } = products.find((d) => d.id == id);
  return (
    <div className="w-full px-4 md:px-0 py-16 ">
      <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-8 md:gap-16">
        {/* Product Image */}
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-[550px] h-[550px]  object-cover shadow-md rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {name}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-700 mt-2">
            {price}
          </p>
          {/* Size Selection */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
            <div className="flex gap-3 mt-2">
              {size.map((s) => (
                <button
                  key={s}
                  className="border border-gray-400 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-200 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <button className="mt-4 bg-black text-white px-6 py-3 text-lg font-medium rounded-md hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
