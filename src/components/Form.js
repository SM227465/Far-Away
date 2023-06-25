import { useState } from 'react';
const items = Array.from({ length: 20 }, (_, index) => index + 1);

export default function Form(props) {
  const { onAddItems } = props;

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select value={quantity} onChange={(event) => setQuantity(Number(event.target.value))}>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
