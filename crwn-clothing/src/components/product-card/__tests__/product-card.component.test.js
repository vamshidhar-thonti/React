import { screen, fireEvent } from "@testing-library/react";

import { renderWithProvider } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("Product card tests", () => {
  test("it should the product item when Product Card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageurl: "test",
      name: "Item A",
      price: 10,
    };

    const { store } = renderWithProvider(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/Add to Cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
