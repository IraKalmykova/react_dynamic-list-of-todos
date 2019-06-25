import React from 'react';
import '../App.css';

const User = (props) => {
  return (
    <td className="table__column">{props.name}</td>
  )
}

export default User;