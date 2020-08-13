import React from 'react';

function App() {
  return (
    <React.Fragment>

      <header>
        <h1>Кошелёек</h1>
        <h2>Калькулятор расходов</h2>
      </header>

      <main>
        <div ClassName="container">

          <section ClassName="total">
            <header ClassName="total__header">
              <h3>Баланс</h3>
              <p ClassName="total__balance">0 ₽</p>
            </header>

            <div ClassName="total__main">
              <div ClassName="total__main-item total__income">
                <h4>Доходы</h4>
                <p ClassName="total__money total__money-income">
                  +0 ₽
                </p>
              </div>
              <div ClassName="total__main-item total__expenses">
                <h4>Расходы</h4>
                <p ClassName="total__money total__money-expenses">
                  -0 ₽
                </p>
              </div>
            </div>
          </section>

          <section ClassName="history">
            <h3>История расходов</h3>
            <ul ClassName="history__list">
              <li ClassName="history__item history__item-plus">Получил зарплату
                        <span ClassName="history__money">+30000 ₽</span>
                <button ClassName="history__delete">x</button>
              </li>
              <li ClassName="history__item  history__item-minus">Отдал долг
                        <span ClassName="history__money">-10000 ₽</span>
                <button ClassName="history__delete">x</button>
              </li>
            </ul>
          </section>

          <section ClassName="operation">
            <h3>Новая операция</h3>
            <form id="form">
              <label>
                <input type="text" ClassName="operation__fields operation__name" placeholder="Наименование операции"></input>
              </label>
              <label>
                <input type="number" ClassName="operation__fields operation__amount" placeholder="Введите сумму"></input>
              </label>
                  
              <div ClassName="operation__btns">
                <button type="submit" ClassName="operation__btn operation__btn-subtract">РАСХОД</button>
                <button type="submit" ClassName="operation__btn operation__btn-add">ДОХОД</button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
