"use client";

import { use, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  cant: number;
}

function ClientCart({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productToAdd: Product) => {
    setCart((current) => {
      const index = current.findIndex(
        (itme) => itme.product.id === productToAdd.id
      );
      if (index !== -1) {
        const newCart = current.slice();
        newCart[index] = {
          ...newCart[index],
          cant: newCart[index].cant + 1,
        };
        return newCart;
      } else {
        return [...current, { product: productToAdd, cant: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((current) =>
      current.reduce((acc, item) => {
        if (item.product.id === productId) {
          if (item.cant > 1) {
            acc.push({ ...item, cant: item.cant - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[])
    );
  };

  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3 ...">
        {products.map((product) => (
          <div className="mb-6 ... " key={product.id}>
            <h2 className="text-[20px]">{product.name}</h2>
            <p>{product.description}</p>
            <img
              className="object-cover h-48 w-96"
              src={product.image}
              alt={product.name}
              style={{ width: "200px" }}
            />
            <p className="text-green-600 text-2xl">${product.price}</p>
            <button
              className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
              onClick={() => addToCart(product)}>
              Agregar
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="col-span-2">
          <h2 className="text-[30px]">Carrito</h2>
          {cart.map((item) => (
            <div className="mb-2 ..." key={item.product.id}>
              <h4>
                {item.product.name} - ${item.product.price} x{" "}
                <h2 className="text-2xl text-sky-600">{item.cant}</h2>
                <button
                  className="text-white px-4 sm:px-4 py-4 sm:py-1 bg-red-500 hover:bg-red-600"
                  onClick={() => removeFromCart(item.product.id)}>
                  Eliminar
                </button>
              </h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ClientCart;
