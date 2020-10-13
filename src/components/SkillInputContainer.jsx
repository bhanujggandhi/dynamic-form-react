import React from "react";
import FormInputContainer from "./FormInputContainer";

class SkillInputContainer extends React.Component {
  constructor() {
    super();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.helperspan = null;

    this.state = {
      currentcolor: [
        "#531CB3",
        "#7149EE",
        "#B754FF",
        "#ED4FEF",
        "#ED49AB",
        "#ED4FEF",
        "#B754FF",
        "#7149EE",
      ],
      content_add: "add +",
      width: 100,
      skills: [],
    };
    this.lastId = -1;
  }

  handleFocus(event) {
    this.setState({ content_add: "" });
  }

  handleChange(event) {
    const usr_input = event.target.value;
    this.setState({ content_add: usr_input });
  }

  handleKeypress(event) {
    if (event.key === "Enter") {
      var newArray = this.state.skills;
      var currentcontent = this.state.content_add.trim();
      if (!currentcontent) {
        return;
      }

      var currentWidth = this.helperspan.offsetWidth;
      newArray.push({
        content: currentcontent,
        id: ++this.lastId,
        itemWidth: currentWidth + 2,
      });
      this.setState({
        skills: newArray,
        content_add: "",
      });
    }
  }

  handleBlur(event) {
    this.setState({ content_add: "add +" });
  }

  handleClick(event) {
    const idToRemove = Number(event.target.dataset["item"]);
    const newArray = this.state.skills.filter((listitem) => {
      return listitem.id !== idToRemove;
    });
    this.setState({ skills: newArray });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.content_add !== this.state.content_add) {
      console.log(
        "did update, content:",
        this.helperspan.textContent,
        "width",
        this.helperspan.offsetWidth
      );
      const helperWidth = this.helperspan.offsetWidth;
      this.setState({ width: Math.max(50, helperWidth + 1) });
    }
  }

  render() {
    return (
      <div>
        <FormInputContainer
          skills={this.state.skills}
          content_add={this.state.content_add}
          width={this.state.width}
          currentcolor={this.state.currentcolor}
          handleBlur={this.handleBlur}
          handleChange={this.handleChange}
          handleKeypress={this.handleKeypress}
          handleFocus={this.handleFocus}
          handleClick={this.handleClick}
        />
        <span id='helperspan' ref={(el) => (this.helperspan = el)}>
          {this.state.content_add}
        </span>
      </div>
    );
  }
}

export default SkillInputContainer;
