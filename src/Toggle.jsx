import React, { Component } from "react";

export class Toggle extends Component {
    state = {
        isToggled: false
    }

    toggle = () => {
        this.setState((state) => {
            return { isToggled: !state.isToggled }
        })
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