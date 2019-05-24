import React, { Component, useContext } from "react";

interface IState {
    isToggled: boolean;
}


export class Toggle extends Component<IState> {
    state = {
        isToggled: false
    }

    toggle = () => {
        // this.setState((state) => {
        //     return { isToggled: !state.isToggled }
        // })
    }
    render() {
        return (
            <div>
                <button onClick={this.toggle}>
                    Toggle
                </button>
                {
                    this.state.isToggled && <h1>Hello</h1>
                }
            </div>
        )

    }
}