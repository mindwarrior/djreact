import React from "react"

import Headline from "../components/Headline"

export default class App1Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Hot Reloading or not?</Headline>
          </div>
        </div>
      </div>
    )
  }
}