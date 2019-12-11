import React, { useState } from "react";
import { Button } from "reactstrap";

function Search(props) {
  const [username, setUsername] = useState({ name: "" });
  const onsubmit = event => {
    event.preventDefault();
  };

  const onchange = event => {
    setUsername({ ...username, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input
          type='text'
          name='name'
          onChange={onchange}
          value={username.name}
          placeholder='Search for a user'
        />
        <br />
        <br />
        <Button color='primary' onClick={props.update(username.name)}>
          Search
        </Button>
      </form>
    </div>
  );
}

export default Search;
