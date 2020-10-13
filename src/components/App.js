import React from "react";

import SkillInputContainer from "./SkillInputContainer";

import "../styles/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleChangeImprovements = this.handleChangeImprovements.bind(this);
    this.handleChangeAttention = this.handleChangeAttention.bind(this);
    this.state = {
      skills: [],
      improvements: [],
      attention: [],
    };
  }
  onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }

  handleChangeSkill(skills) {
    this.setState({ skills: skills });
  }
  handleChangeImprovements(skills) {
    this.setState({ improvements: skills });
  }
  handleChangeAttention(skills) {
    this.setState({ attention: skills });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor='value'>IEP - 2020-10-11</label>
        <br />
        <br />
        Hit "Enter" to confirm, Click to remove
        <hr />
        <h2 htmlFor=''>Skills to improve</h2>
        <SkillInputContainer onSkillChange={this.handleChangeSkill} />
        <hr />
        <h2 htmlFor=''>Areas of strength</h2>
        <SkillInputContainer onSkillChange={this.handleChangeImprovements} />
        <hr />
        <h2 htmlFor=''>Areas of attention</h2>
        <SkillInputContainer onSkillChange={this.handleChangeAttention} />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default App;
