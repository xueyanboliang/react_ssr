import React, { Component } from 'react'

export default class Home extends Component {
    render () {
        return (
            <div>
                <h3 onClick={function () { console.log(233) }} style={{color: "red"}}>Hello, SSR</h3>
            </div>
        )
    }
}