import React from "react";
import FormInputContainer from "./FormInputContainer";

class SkillInputContainer extends React.Component {
  constructor() {
    super();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleKeypress = this.handleKeypress.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.helperSpan = null;

    this.state = {
      currentColor: [
        "#531CB3",
        "#7149EE",
        "#B754FF",
        "#ED4FEF",
        "#ED49AB",
        "#ED4FEF",
        "#B754FF",
        "#7149EE",
      ],
      contentAdd: "add +",
      width: 100,
      skills: [],
    };
    this.lastId = -1;
  }

  // Reset value when input gets out of focus

  handleFocus() {
    this.setState({ contentAdd: "" });
  }

  // Control input values

  handleChange(event) {
    const userInput = event.target.value;
    this.setState({ contentAdd: userInput });
  }

  //Saving fields on pressing enter

  // handleKeypress(event) {
  //   if (event.key === "Enter") {
  //     let newArray = this.state.skills;
  //     let currentcontent = this.state.contentAdd.trim();
  //     if (!currentcontent) {
  //       return;
  //     }

  //     let currentWidth = this.helperSpan.offsetWidth;
  //     newArray.push({
  //       content: currentcontent,
  //       id: ++this.lastId,
  //       itemWidth: currentWidth + 2,
  //     });
  //     this.setState({
  //       skills: newArray,
  //       contentAdd: "",
  //     });
  //     this.props.onInputChange(newArray);
  //   }
  // }

  // Saving on input out of focus and updating the state

  handleBlur(event) {
    let newArray = this.state.skills;
    let currentcontent = this.state.contentAdd.trim();
    if (!currentcontent) {
      this.setState({
        contentAdd: "add +",
      });
      return;
    }

    let currentWidth = this.helperSpan.offsetWidth;
    newArray.push({
      content: currentcontent,
      id: ++this.lastId,
      itemWidth: currentWidth + 2,
    });
    this.setState({
      skills: newArray,
      contentAdd: "add +",
    });
    this.props.onInputChange(newArray);
  }

  // Delete the field at clicking

  handleClick(event) {
    const idToRemove = Number(event.target.dataset["item"]);
    const newArray = this.state.skills.filter((listitem) => {
      return listitem.id !== idToRemove;
    });
    this.setState({ skills: newArray });
    this.props.onInputChange(newArray);
  }

  // Updating the width of element after every input stroke

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contentAdd !== this.state.contentAdd) {
      // console.log(
      //   "did update, content:",
      //   this.helperSpan.textContent,
      //   "width",
      //   this.helperSpan.offsetWidth
      // );
      const helperWidth = this.helperSpan.offsetWidth;
      this.setState({ width: Math.max(50, helperWidth + 1) });
    }
  }

  render() {
    return (
      <div>
        <FormInputContainer
          skills={this.state.skills}
          contentAdd={this.state.contentAdd}
          width={this.state.width}
          currentColor={this.state.currentColor}
          handleBlur={this.handleBlur}
          handleChange={this.handleChange}
          // handleKeypress={this.handleKeypress}
          handleFocus={this.handleFocus}
          handleClick={this.handleClick}
        />
        {/* Helper span to look at the width || Invisible in CSS */}
        <span id='helperspan' ref={(el) => (this.helperSpan = el)}>
          {this.state.contentAdd}
        </span>
      </div>
    );
  }
}

export default SkillInputContainer;
