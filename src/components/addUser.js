import React, { Component } from 'react'

export class addUser extends Component {
  render() {
    return (
      <div>
          <form>
              <input placeholder="Forename">
              <input placeholder="Surname">
              <input placeholder="********">
          <select>
              <option value="1">User</option>
              <option value="2">Manager</option>
              <option value="1">Admin</option>
        </select>
        <select>
              <option value="programmer">Programmer</option>
              <option value="pa">Personal Assistant</option>
              <option value="tester">Tester</option>
        </select>
        <input type="submit">
        </form>
        
      </div>
    )
  }
}

export default addUser


