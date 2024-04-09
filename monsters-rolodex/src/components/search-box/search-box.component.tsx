import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

// interface ISearchBox extends ISearchBoxProps {
//   className: string;
//   placeholder: string;
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string; // ?: implies optional
  onChangeHandler: ChangeEventHandler<HTMLInputElement>; // Need to mention the specific HTML Element type
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
