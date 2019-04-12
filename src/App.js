import React, { Component } from "react";
import Fuse from "fuse.js";
import "./App.css";
import issuesData from "./issues.json";
import HeadContainer from "./components/HeadBar/HeadContainer";
import IssueList from "./components/IssueList/IssueList";
import SearchBox from "./components/FilterBar/SearchBox";
import OpenClose from "./components/FilterBar/OpenClose";
import SortMenu from "./components/FilterBar/SortMenu";
import StateMenu from "./components/FilterBar/StateMenu";
import AuthorMenu from "./components/FilterBar/AuthorMenu";
import LabelMenu from "./components/FilterBar/LabelMenu";

class App extends Component {
  state = {
    issues: issuesData
  };

  handleSort = event => {
    if (event.target.value === "sortBy") {
      this.setState({ issues: issuesData });
    }
    if (event.target.value === "newest") {
      const newIssues = [...issuesData].sort((issue1, issue2) => {
        return (
          new Date(issue2.created_at).getTime() -
          new Date(issue1.created_at).getTime()
        );
      });

      this.setState({ issues: newIssues });
    }
    if (event.target.value === "oldest") {
      const oldIssues = [...issuesData].sort((issue1, issue2) => {
        return (
          new Date(issue1.created_at).getTime() -
          new Date(issue2.created_at).getTime()
        );
      });
      console.log(oldIssues);
      this.setState({ issues: oldIssues });
    }
    if (event.target.value === "recently updated") {
      const recentIssues = [...issuesData].sort((issue1, issue2) => {
        return (
          new Date(issue2.updated_at).getTime() -
          new Date(issue1.updated_at).getTime()
        );
      });
      this.setState({ issues: recentIssues });
    }
    if (event.target.value === "least recently updated") {
      const leastRecentIssues = [...issuesData].sort((issue1, issue2) => {
        return (
          new Date(issue1.updated_at).getTime() -
          new Date(issue2.updated_at).getTime()
        );
      });
      this.setState({ issues: leastRecentIssues });
    }
  };

  handleState = event => {
    if (event.target.value === "open") {
      const openIssues = issuesData.filter(issue => {
        return issue.state === "open";
      });
      this.setState({ issues: openIssues });
    }
    if (event.target.value === "close") {
      const closeIssues = issuesData.filter(issue => {
        return issue.state === "close";
      });
      this.setState({ issues: closeIssues });
    }
    if (event.target.value === "state") {
      this.setState({ issues: issuesData });
    }
  };

  handleAuthor = event => {
    const filteredByAuthor = issuesData.filter(issue => {
      return issue.user.login === event.target.value;
    });
    this.setState({ issues: filteredByAuthor });
    if (event.target.value === "author") {
      this.setState({ issues: issuesData });
    }
  };

  handleLabel = event => {
    const filteredByLabel = issuesData.filter(issue => {
      let available = false;
      issue.labels.forEach(label => {
        if (label.name === event.target.value) {
          available = true;
        }
      });
      return available;
    });
    this.setState({ issues: filteredByLabel });
    if (event.target.value === "label") {
      this.setState({ issues: issuesData });
    }
  };

  handleSearch = event => {
    if (event.target.value === "") {
      this.setState({ issues: issuesData });
    } else {
      const options = {
        keys: ["title"]
      };
      const fuse = new Fuse(issuesData, options);
      const result = fuse.search(event.target.value);
      this.setState({ issues: result });
    }
  };

  render() {
    return (
      <div className="App">
        <HeadContainer dataLength={this.state.issues.length} />
        <div className="search-filter-box">
          <SearchBox onKeyPress={this.handleSearch} />
          <div className="filter-box">
            <OpenClose issues={this.state.issues} />
            <SortMenu onChange={this.handleSort} />
            <StateMenu onChange={this.handleState} />
            <AuthorMenu issues={issuesData} onChange={this.handleAuthor} />
            <LabelMenu issues={issuesData} onChange={this.handleLabel} />
          </div>
        </div>

        {this.state.issues.map(issue => {
          return <IssueList issue={issue} />;
        })}
      </div>
    );
  }
}

export default App;
