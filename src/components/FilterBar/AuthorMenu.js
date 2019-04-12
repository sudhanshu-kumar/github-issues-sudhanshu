import React from "react";
import "./FilterBox.css";

const AuthorMenu = props => {
  const authors = props.issues.map(issue => {
    return issue.user.login;
  });
  const uniqueAuthors = [...new Set(authors)];
  return (
    <select defaultValue="author" onChange={props.onChange}>
      <option value="author">Author</option>
      {uniqueAuthors.map(author => {
        return <option value={author}>{author}</option>;
      })}
    </select>
  );
};

export default AuthorMenu;
