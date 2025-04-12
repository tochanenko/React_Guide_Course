import { useState } from "react";

export default function Player({ name = 'Player', symbol, isActive,  onPlayerChange }) {
  let [isEditing, setEditing] = useState(false);
  let [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setEditing((editing) => !editing);
    if (isEditing) onPlayerChange(symbol, playerName);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let playerNameSpan = <span className='player-name'>{playerName}</span>;

  let playerInput = <input type="text" required value={playerName} onChange={handleChange} />;

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {isEditing ? playerInput : playerNameSpan}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}