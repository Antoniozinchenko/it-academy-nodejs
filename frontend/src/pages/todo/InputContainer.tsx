import React from 'react';

type InputProps = {
  value: string,
  onChange: (event: any) => void,
  onAddItem: () => void
}
const InputContainer = ({value, onChange, onAddItem}: InputProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button disabled={!value} onClick={onAddItem}>Press me</button>
    </div>
  );
};
export default InputContainer;