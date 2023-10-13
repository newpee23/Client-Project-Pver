import { SingleValue } from "react-select";
import { banData } from "./pageType";

export type buttonSingIN = {
  divClass: string;
  className: string;
  type?: "button" | "submit" | "reset";
  textBtn: string;
  onClick?: () => void;
};

export type DivHrType = {
  divClass: string;
  className: string;
};

export type DivTxtMesErr = {
  className: string;
  text: string;
};

export type Dropdown = {
  className: string;
  name: string;
  onChange?: (selectedOption: SingleValue<banData>) => void;
  placeholder?: string;
  required?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  options: Opprovince[];
  label?: string;
  value?: Opprovince | null;
  isDisabled?: boolean;
};

export type Opprovince = {
  value: number;
  label: string;
};

export type OpprovinceSelet = {
  selectP03: Opprovince | null;
  selectP09t: Opprovince | null;
  selectP018t: Opprovince | null;
  selectP020t: Opprovince | null;
};
