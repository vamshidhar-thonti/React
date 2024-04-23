import { screen, fireEvent } from "@testing-library/react";
import * as reactRedux from "react-redux";

import { renderWithProvider } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";
import { signOutStart } from "../../../store/user/user.action";

describe("Navigation component test", () => {
  test("Sign In to be present in navigation when currentUser is null", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeInTheDocument();
  });

  test("Sign Out to be present and not Sign In link in navigation when currentUser is present", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    // getByText throws an error when the given element is not available
    // queryByText can be used instead, which returns null when the element is not present
    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).not.toBeInTheDocument();
  });

  test("it should have your cart is empty with empty cartItems and cart dropdown is open", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeInTheDocument();
  });

  test("it should not have your cart is empty with empty cartItems and cart dropdown is open", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i);
    expect(dropdownTextElement).toBeNull();
  });

  test("it should dispatch signOut action on clicking signOut link", async () => {
    // const mockDispatch = jest.fn();
    // jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

    // renderWithProvider(<Navigation />, {
    //   preloadedState: {
    //     user: {
    //       currentUser: {},
    //     },
    //   },
    // });

    // const signOutLinkElement = screen.getByText(/sign out/i);
    // expect(signOutLinkElement).toBeInTheDocument();

    // await fireEvent.click(signOutLinkElement);
    // expect(mockDispatch).toHaveBeenCalled();
    // expect(mockDispatch).toHaveBeenCalledWith(signOutStart);

    // mockDispatch.mockClear();
  });
});
