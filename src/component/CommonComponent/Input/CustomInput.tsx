import React, { memo, ReactElement } from "react";
import "./CustomInput.scss";

interface Props {
  type: string;
  placeHolder: string;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeInput: (id: any) => void;
}

const InputField = ({
  type,
  value,
  onChangeInput,
  placeHolder,
}: Props): ReactElement => {
  return (
    <label htmlFor="Name">
      <input
        type={type}
        onChange={onChangeInput}
        value={value}
        placeholder={placeHolder}
      />
    </label>
  );
};

export default memo(InputField);
