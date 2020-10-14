import React from "react";

import SkillInputContainer from "./SkillInputContainer";

import "../styles/App.css";
import FieldTextArea from "./FieldTextarea";

class App extends React.Component {
  constructor() {
    super();
    this.handleChangeSkill = this.handleChangeSkill.bind(this);
    this.handleChangeImprovements = this.handleChangeImprovements.bind(this);
    this.handleChangeAttention = this.handleChangeAttention.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      skills: [],
      improvements: [],
      attention: [],
    };
  }

  // Handling the form submission
  onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    alert(
      "skills :" +
        this.state.skills.map((item) => item.content) +
        "\n" +
        "improvements: " +
        this.state.improvements.map((item) => item.content) +
        "\n" +
        "attentions: " +
        this.state.attention.map((item) => item.content)
    );
  }

  // Fetching the state from child

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
      <div>
        <label htmlFor='value'>IEP - 2020-10-11</label>
        <br />
        <br />
        Click on empty space to add, Click on the item to remove, press enter to
        submit
        <hr />
        <form onSubmit={this.onSubmit}>
          <h2 htmlFor=''>Skills to improve</h2>
          <SkillInputContainer onInputChange={this.handleChangeSkill} />
          <hr />
          <h2 htmlFor=''>Areas of strength</h2>
          <SkillInputContainer onInputChange={this.handleChangeImprovements} />
          <hr />
          <h2 htmlFor=''>Areas of attention</h2>
          <SkillInputContainer onInputChange={this.handleChangeAttention} />
          <hr />
          <h2 htmlFor=''>
            Accomodation for learning, including required equipments
          </h2>
          <div className='containerText'>
            <FieldTextArea />
          </div>
          <br />
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default App;
