import React, { Component } from 'react';


export default class ResultComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            scoreVisibility : "hideScore",
            totalPoints : 0
        }
    }

    submitButtonClick(){
        this.setState({
            scoreVisibility : "showScore"
        })
    }

    setTotalPoints (answeredQuestions) {
        var totalPoints = 0;
        for(var i = 0; i < answeredQuestions.length; i++){
            var thisAns = answeredQuestions[i];
            totalPoints += thisAns.points;
        } 

        this.setState({
            totalPoints : (totalPoints/(this.props.totalQuestions * 10)) * 100
        })
      }

    pageReload(){
        window.location.reload();
    }

    render() {

        let submitVisibility = (this.props.answeredQuestions.length === this.props.totalQuestions) ? "showContainer" : "hideContainer";
        return (
            <div id="child">
                <p className={this.state.scoreVisibility}>You scored : {this.state.totalPoints} % </p>
                <button className={submitVisibility} onClick={this.submitButtonClick.bind(this)}>Submit</button>
                <button className={submitVisibility} onClick={this.pageReload.bind(this)}>Try again</button>
            </div>
        );
    }
}

