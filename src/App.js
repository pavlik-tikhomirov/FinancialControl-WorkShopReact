import React, { Component } from 'react';
import Total from './components/Total/Total';
import History from './components/History/History';
import Operation from './components/Operation/Operation';

class App extends Component {



  state = {
    transactions: [],
    description: '',
    amount: '',
    consumption: 0,
    income: 0,
    balance: 0,
  }

  addTransaction = add => {
    const transactions = [...this.state.transactions];
    const transaction = {
      id: `cmr${(+new Date).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount,
      add
    }    
    
    this.ChangeBalance(add, transaction.amount);
    transactions.push(transaction);
    
    this.setState({
      transactions,
      description: '',
      amount: '',
    });
  }


  addAmount = e => {

    this.setState({ amount: e.target.value });
  }
  addDescription = e => {

    this.setState({ description: e.target.value });
  }

  ChangeBalance = (add, amount) => {
    var bal = this.state.balance;
    var cons = this.state.consumption;
    var inc = this.state.income;

    if (add) {
      bal += Number(amount);
      inc += Number(amount);
    }
    else {
      bal -= Number(amount);
      cons += Number(amount);
    }
    this.setState({ balance: bal, income: inc, consumption: cons });
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
              balance={this.state.balance} 
              income={this.state.income} 
              consumption={this.state.consumption} />
            <History transactions={this.state.transactions} />
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
              changeBalance={this.changeBalance}
            />
          </div>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
