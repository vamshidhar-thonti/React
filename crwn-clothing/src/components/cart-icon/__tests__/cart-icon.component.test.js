import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon Test", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Item A", imageurl: "test", price: 10, quantity: 1 },
      { id: 2, name: "Item B", imageurl: "test", price: 10, quantity: 5 },
    ];

    renderWithProvider(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("6");
    expect(cartIconElement).toBeInTheDocument();
  });
});
