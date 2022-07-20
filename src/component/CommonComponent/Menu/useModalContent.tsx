import React, { useCallback, useMemo, useState } from 'react';

interface Prop{
    name: string;
}

export default function useModalContent({ name }:Prop) {
  const [state, setState] = useState<string>('');

  const editName = useCallback((nameToEdit:string) => {
    switch (nameToEdit) {
      case 'Список команд':
        return 'Команда';
      case 'Статистика':
        return 'Команда';
      case 'Список задач':
        return 'Задача';
      default:
        return '';
    }
  }, []);

  const clickAddButton = useCallback(() => {
    console.log(state.length > 3 ? `ok, new ${editName(name)} name ${state}` : 'nope');
  }, [state, name]);

  /* {`Введите имя ${name}`} */
  const renderText = useMemo(() => (
    <label htmlFor="Name" style={{ textAlign: 'center', display: 'block' }}>
      {}
      <input
        type="text"
        onChange={(loginChange) => { setState(loginChange.target.value); }}
        value={state}
        placeholder={editName(name)}
        style={{ borderRadius: '10px', textAlign: 'center', height: '2vw' }}
      />
    </label>
  ), [name, state]);

  const renderCreateButton = useMemo(() => (
    <button
      type="button"
      className="ButtonStyle"
      onClick={clickAddButton}
    >
      добавить
    </button>
  ), [clickAddButton]);

  return {
    renderCreateButton,
    renderText,
  } as const;
}
