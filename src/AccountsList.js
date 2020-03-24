import React, {Component, Fragment} from "react";
import UncontrolledEmailInput from "./UncontrolledEmailInput";
import ScrollingList from "./ScrollingList"

export default class AccountsList extends Component {
    inputRef = React.createRef();

    state = {
        selectedIndex: 0
    };

    handleChange = index => {
        this.setState({selectedIndex: index}, () => {
            const selectedAccount = this.props.accounts[index];
            this.inputRef.current.resetEmailForNewUser(selectedAccount.email);
        });
    };


    render() {
        const {accounts} = this.props;
        const {selectedIndex} = this.state;
        const selectedAccount = accounts[selectedIndex];
        return (
            <Fragment>
                <UncontrolledEmailInput
                    defaultEmail={selectedAccount.email}
                    ref={this.inputRef}
                />
                <p>
                    Accounts:
                    {this.props.accounts.map((account, index) => (
                        <label key={account.id}>
                            <input
                                type="radio"
                                name="account"
                                checked={selectedIndex === index}
                                onChange={() => this.handleChange(index)}
                            />{" "}
                            {account.name}
                        </label>
                    ))}
                </p>
            </Fragment>
        );
    }
}
