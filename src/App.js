import React, { Component } from 'react';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component {

  state = {
    transactions: JSON.parse(localStorage.getItem('calcMoney1')) || [],
    description: '',
    amount: '',
    resultIncome: 0,
    resultConsumption: 0,
    TotalBalance: 0,
  }
  componentWillMount() {
    this.getTotalBalance()
  }
  componentDidUpdate() {
    this.addStorage()
  }
  addTransaction = add => {
    const transactions = [...this.state.transactions,
    {
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount,
      add
    }
    ];
    this.setState({
      transactions,
      description: '',
      amount: '',
    }, () => {
      this.getTotalBalance();
    });
  }

  addAmount = e => {

    this.setState({ amount: e.target.value });
  }

  addDescription = e => {

    this.setState({ description: e.target.value });
  }

  getIncome() {
    return this.state.transactions
      .filter(item => item.add)
      .reduce((acc, item) => Number(item.amount) + acc, 0)
  }

  getConsumption() {
    return this.state.transactions
      .filter(item => !item.add)
      .reduce((acc, item) => Number(item.amount) + acc, 0)
  }

  getTotalBalance() {
    const resultIncome = this.getIncome();
    const resultConsumption = this.getConsumption();
    const TotalBalance = resultIncome - resultConsumption;
    this.setState({
      resultIncome,
      resultConsumption,
      TotalBalance,
    })
  }

  addStorage() {
    localStorage.setItem('calcMoney1', JSON.stringify(this.state.transactions))
  }

  delTransaction = key => {
    const transactions = this.state.transactions.filter(item => item.id !== key)
    this.setState({ transactions }, this.getTotalBalance)
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Кошелёк</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">
            <Total
              balance={this.state.TotalBalance}
              income={this.state.resultIncome}
              consumption={this.state.resultConsumption} />
            <History
              transactions={this.state.transactions}
              delTransaction={this.delTransaction} />
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
              getTotalBalance={this.getTotalBalance}
            />
          </div>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
