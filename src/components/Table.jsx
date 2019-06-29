import React from 'react';

const Header = ({attributes}) =>
  attributes.map(attribute => <th>{attribute}</th>);

const Body = ({items, attributes}) =>
  items.map(item => (
    <tr>
      {attributes.map(attribute => (
        <td>{item[attribute]}</td>
      ))}
    </tr>
  ));

const Table = ({items, attributes}) => (
  <table class="table">
    <thead>
      <tr>
        <Header attributes={attributes} />
      </tr>
    </thead>
    <tfoot>
      <tr>
        <Header attributes={attributes} />
      </tr>
    </tfoot>
    <tbody>
      <Body items={items} attributes={attributes} />
    </tbody>
  </table>
);

export default Table;
