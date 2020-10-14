import React from "react";
import FormInputContainer from "./FormInputContainer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class FieldTextArea extends React.Component {
  constructor() {
    super();
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleKeypress = this.handleKeypress.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);

    // this.helperspan = null;

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
      content_add: { head: "", body: "" },
      width: 100,
      skills: [],
    };
    this.lastId = -1;
  }

  handleFocus(event) {
    this.setState({ content_add: "" });
  }

  handleChange(event) {
    this.setState({
      content_add: { [event.target.name]: event.target.value },
    });
  }

  handleBlur(event) {
    let newArray = this.state.skills;
    // let currentContentHead = this.state.content_add.head.trim();
    // let currentContentBody = this.state.content_add.body.trim();
    // if (!currentContentHead) {
    //   this.setState({
    //     content_add: { head: "add +" },
    //   });
    // }

    // if (!currentContentBody) {
    //   this.setState({
    //     content_add: { head: "add +" },
    //   });
    // }

    // let currentWidth = this.helperspan.offsetWidth;
    newArray.push({
      content: {
        head: this.state.content_add.head,
        body: this.state.content_add.body,
      },
      id: ++this.lastId,
      // itemWidth: currentWidth + 2,
    });
    this.setState({
      skills: newArray,
      content_add: { head: "", body: "" },
    });
    console.log(this.state.content_add.head);
    // this.props.onSkillChange(newArray);
  }

  handleClick(event) {
    const idToRemove = Number(event.target.dataset["item"]);
    const newArray = this.state.skills.filter((listitem) => {
      return listitem.id !== idToRemove;
    });
    this.setState({ skills: newArray });
    // this.props.onSkillChange(newArray);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.content_add !== this.state.content_add) {
  //     console.log(
  //       "did update, content:",
  //       this.helperspan.textContent,
  //       "width",
  //       this.helperspan.offsetWidth
  //     );
  //     const helperWidth = this.helperspan.offsetWidth;
  //     this.setState({ width: Math.max(50, helperWidth + 1) });
  //   }
  // }

  render() {
    return (
      <div>
        <div id='containerText'></div>
        <div>
          <TransitionGroup>
            {this.state.skills.map((listitem, index) => (
              <CSSTransition
                key={listitem.id}
                classNames='item-transition'
                timeout={{ enter: 500, exit: 210 }}
              >
                <div
                  onClick={this.handleClick}
                  data-item={listitem.id}
                  style={{
                    backgroundColor: this.state.currentcolor[
                      index % this.state.currentcolor.length
                    ],
                    width: listitem.itemWidth,
                  }}
                >
                  <h1>{listitem.content.head}</h1>
                  <p>{listitem.content.body}</p>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <input
            autoComplete='off'
            name='head'
            type='text'
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            // onKeyPress={handleKeypress}
            // onBlur={this.handleBlur}
            value={this.state.content_add.head}
          />
          <textarea
            autoComplete='off'
            name='body'
            id=''
            cols='30'
            rows='10'
            onFocus={this.handleFocus}
            onChange={this.handleChange}
            // onKeyPress={handleKeypress}
            onBlur={this.handleBlur}
            value={this.state.content_add.body}
          ></textarea>
          {/* <input
            onFocus={handleFocus}
            onChange={handleChange}
            // onKeyPress={handleKeypress}
            onBlur={handleBlur}
            value={content_add}
            style={{ width: width }}
          /> */}
        </div>
        {/* <span id='helperspan' ref={(el) => (this.helperspan = el)}>
          {this.state.content_add}
        </span> */}
      </div>
    );
  }
}

export default FieldTextArea;
