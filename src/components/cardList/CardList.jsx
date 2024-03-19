import React, { Component } from "react";
import "./cardlist.css"
import Card from "../card/Card";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => <Card key={monster.id} monster={monster}/>)}
      </div>
    );
  }
}
