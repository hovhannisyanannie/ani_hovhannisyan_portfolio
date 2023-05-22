import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = { lightMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
        return { lightMode: !state.lightMode };
      default:
        return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch}}>{props.children}</ThemeContext.Provider>;
}