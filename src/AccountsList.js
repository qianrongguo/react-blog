import React, { Component, Fragment } from "react";
import UncontrolledEmailInput from "./UncontrolledEmailInput";

export default class AccountsList extends Component {
  state = {
    selectedIndex: 0
  };

  render() {
    const { accounts } = this.props;
    const { selectedIndex } = this.state;
    const selectedAccount = accounts[selectedIndex];
    console.log(selectedAccount)
    return (
      <Fragment>
        <UncontrolledEmailInput
          key={selectedAccount.id}
          defaultEmail={selectedAccount.email}
        />
        <p>
          Accounts:
          {this.props.accounts.map((account, index) => (
            <label key={account.id}>
              <input
                type="radio"
                name="account"
                checked={selectedIndex === index}
                onChange={() => this.setState({ selectedIndex: index })}
              />{" "}
              {account.name}
            </label>
          ))}
        </p>
      </Fragment>
    );
  }
}
