import React, { useState } from 'react';
import './App.css';

// Импорт изображения
import img4 from './components/images/images.jpg';

function PizzaCard() {
  const [quantity, setQuantity] = useState(1); // Состояние для количества товара
  const [size, setSize] = useState('25 см'); // Состояние для выбранного размера

  // Объект с ценами для каждого размера
  const prices = {
    '25 см': 550,
    '30 см': 650,
    '35 см': 750,
  };

  const price = prices[size]; // Получаем цену по выбранному размеру

  // Обработчик изменения количества
  const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prevQuantity => prevQuantity - 1);
  };

  // Обработчик изменения размера
  const handleSizeChange = (event) => setSize(event.target.value);

  return (
    <div className="pizza-card">
      <div className="pizza-card__label">Хит сезона</div>
      <img
        src={img4}
        alt="Пицца Пепперони"
        className="pizza-card__image"
      />
      <h3 className="pizza-card__title">Пепперони</h3>
      <p className="pizza-card__description">
        Ничего лишнего: Томатный соус, колбаски Пепперони и Моцарелла
      </p>
      <div className="pizza-card__controls">
        <select 
          className="pizza-card__size" 
          value={size} 
          onChange={handleSizeChange}
        >
          <option>Диаметр</option>
          <option>25 см</option>
          <option>30 см</option>
          <option>35 см</option>
        </select>
        <div className="pizza-card__quantity">
          <button className="quantity-btn" onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button className="quantity-btn" onClick={handleIncrease}>+</button>
        </div>
        <div className="pizza-card__price">от {price} ₽</div>
        <button className="pizza-card__add-to-cart">🛒</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PizzaCard />
    </div>
  );
}

export default App;
