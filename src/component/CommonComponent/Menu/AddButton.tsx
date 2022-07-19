import React, { useCallback, useMemo, useState } from 'react';
import Modal from '../Modal/Modal';

interface Prop{
    name: string;
}

export default function AddButton({ name }:Prop) {
  const [state, setState] = useState<string>('');

  const editName = useCallback((nameToEdit:string) => {
    switch (nameToEdit) {
      case 'Список команд':
        return 'команда';
      case 'Статистика':
        return 'команда';
      case 'Список задач':
        return 'задача';
      default:
        return '';
    }
  }, []);

  const clickAddButton = useCallback(() => (
    console.log(state.length > 3 ? `ok, new ${editName(name)} name ${state}` : 'nope')
  ), [state]);

  /* {`Введите имя ${name}`} */
  const Text = useMemo(() => (
    <label htmlFor="Name" style={{ textAlign: 'center', display: 'block' }}>
      {}
      <input
        type="text"
        onChange={(loginChange) => { setState(loginChange.target.value); }}
        value={state}
        placeholder={editName(name)}
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
      modalName={`Новая ${editName(name)}`}
      triggerButtonName="+"
      triggerButtonStyle="menu-subMenuButtons"
      renderContent={Text}
      renderActions={CreateButton}
    />
  );
}
