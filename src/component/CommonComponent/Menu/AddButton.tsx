import React, { useCallback, useMemo, useState } from 'react';
import Modal from '../Modal/Modal';

interface Prop{
    name: string;
}

export default function AddButton({ name }:Prop) {
  const [state, setState] = useState<string>('');

  const clickAddButton = useCallback(() => (
    console.log(state.length > 3 ? 'ok' : 'nope')
  ), [state]);

  const Text = useMemo(() => (
    <label htmlFor="Name" style={{ textAlign: 'center', display: 'block' }}>
      {}
      <input
        type="text"
        onChange={(loginChange) => { setState(loginChange.target.value); }}
        value={state}
        placeholder={`Введите имя ${name}`}
        style={{ borderRadius: '10px', textAlign: 'center' }}
      />
    </label>
  ), [name, state]);

  const CreateButton = useMemo(() => (
    <button
      type="button"
      className="ButtonStyle"
      onClick={clickAddButton}
    >
      добавить
    </button>
  ), [clickAddButton]);

  return (
    <Modal
      modalName={`Новая ${name}`}
      triggerButtonName="+"
      triggerButtonStyle="menu-subMenuButtons"
      renderContent={Text}
      renderActions={CreateButton}
    />
  );
}
