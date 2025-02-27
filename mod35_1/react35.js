import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";



// =================================
// mod35


// 2.6.1.4	Нове значення стану
// Нове значення стану можна обчислювати на основі поточного значення стану або інших даних.
// В класових компонентах метод setState приймає об'єкт з оновленими значеннями властивостей стану або функцію, яка приймає поточний стан і возвращает об'єкт з оновленими значеннями.
//  У функціональних компонентах функція, отримана від useState, приймає нове значення стану або функцію, яка приймає поточне значення стану і повертає нове значення.
//класовий компонент
handleClick() {
    this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
    });
}

//функциональный  компонент
function handleClick() {
    setCounter((prevCounter) => prevCounter + 1);
}


// 2.6.1.6	Розширений стан:-------------------------
// Розширений стан: Стан в React може бути об'єктом, який містить більше однієї властивості. Ви можете додати додаткові властивості до стану і оновлювати їх незалежно один від одного. Наприклад:
//класовий компонент
constructor(props) {
    super(props);
    this.state = {
        counter: 0,
        message: 'Привет, React!'
    };
}

handleButtonCLick() {
    this.setState({ counter: this.state.counetr+1});
}
 

handleMessageChange(event) {
    this.setState({ message: event.target.value});
}

//функциональный  компонент
function MyComponent() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('Привет, React!');

    function handleButtonCLick() {
        setCounter(counter + 1);
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
    }

    //...
}
// 2.6.2	хуки useState========================
// Так як працювати доведеться далі в більшості з хуками, то більш детально про useState:

// Виклик хука “useState” створює стан і метод, який змінюватиме його значення. У якості параметра хук приймає початковий стан, в нашому випадку число 0. У стані може зберігатися будь-який тип даних.
Const[(counter, setCounter)] = useState(0);

// Ми не можемо змінювати стан компонента напряму
const incrementHandler = () => {
  conter = 2;
};

return <button onClick={(event) => console.log(event)}>Click me!</button>;

function handleClick() {
  console.log("Кнопка буде натиснута");
}

// // -------------------
// class MyComponent extends React.Component {
//   handleClick() {
//     console.log("Кнопка буде натиснута");
//   }

//   render() {
//     return <button onClick={this.handleClick}>Натисни мене!</button>;
//   }
// }
// export default MyComponent;

// -------------------
// Обробка подій в функціональних компонентах: У функціональних компонентах
// React обробники подій можуть бути оголошені як звичайні функції.

const MyComponent = () => {
  const handleClick = () => {
    console.log("Кнопка буде натиснута");
  };

  return <button onClick={handleClick}>Натисни мене!</button>;
};

export default MyComponent;

// Передача додаткових параметрів: Іноді вам може знадобитись передати додаткові параметри до обробника події. В такому випадку використовується стрілочна функція або функція з замиканням. Наприклад:
<button onClick={() => handleClick(param1, param2)}>Натисни мене!</button>;

// Отримання інформації про подію: Об'єкт події, переданий в обробник, містить корисну інформацію про подію. Наприклад, ви можете отримати значення введеного тексту в поле вводу або отримати координати курсору миші. Наприклад:
function handleInputChange(event) {
  console.log(event.target.value); //отримання значенния поля вводу
}

function handleMouseMove(event) {
  console.log(event.clientX, event.clientY); //отримання координат мишi
}

// Відміна події: У React ви можете відмінити стандартну поведінку події, якщо ви хочете заборонити певні дії. Для цього викликайте метод preventDefault() на об'єкті події. Наприклад:
function handleLinkClick(event) {
  event.preventDefault(); //отмена переъода по ссылке
  //додаткова логiка
}

// --------------------
// 2.7.2	Анонімні колбеки

// Інлайн колбеки вважаються антипатерном.
// (я. callback-функция
// Функция обратного вызова — это функция, передаваемая в другую функцию в качестве аргумента, которая затем вызывается внутри внешней функции для завершения какой-либо процедуры или действия)
// Щоразу, коли компонент ререндериться, буде створена нова callback-функція. У багатьох випадках це нормально.
// Але, якщо callback передається як проп компонентам нижче у дереві, вони будуть знову відрендерені,
// оскільки прийдуть нові пропи посилального типу(функція).
// До того ж великі інлайн функції в JSX заважають читабельності розмітки компонента.
return (
  <button
    type="button"
    onClick={(event) => {
      console.log("button was clicked", event); //работает
    }}
  />
);

// 2.7.3	Кастомні методи
// Найчастіше обробники подій оголошуються як методи (handleClick?) класу чи функції, після чого jsx-атрибуту передається посилання на метод.
const handleClick = (event) => {
  console.log("button was clicked", event);
};

// return (
//     <button
//         type="button"
//         onClick={handleClick}
//     />
// );

// я- сам убирает скобки круглые, а в уроке - есть
return <button type="button" onClick={handleClick} />;
