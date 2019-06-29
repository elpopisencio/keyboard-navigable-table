import React from 'react';

const Header = ({attributes}) =>
  attributes.map(attribute => <th>{attribute}</th>);

const Body = ({items, attributes, currentItem, setCurrentItem}) =>
  items.map(item => (
    <tr class={item.id === currentItem.id && "is-selected"}>
      {attributes.map(attribute => (
			<td onClick={() => setCurrentItem(item)}>{item[attribute]}</td>
      ))}
    </tr>
  ));

const Table = ({items, attributes, currentItem, setCurrentItem}) => (
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
		 <Body items={items} attributes={attributes} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    </tbody>
  </table>
);

export default Table;
