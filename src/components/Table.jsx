import React from 'react';

const Header = ({attributes}) =>
  attributes.map(attribute => <th>{attribute}</th>);

const Body = ({items, attributes, currentItem, setCurrentItem}) =>
  items.map(item => (
    <tr class={currentItem && item.id === currentItem.id && 'is-selected'}>
      {attributes.map(attribute => (
        <td onClick={() => setCurrentItem(item)}>{item[attribute]}</td>
      ))}
    </tr>
  ));

const handleKeysMovement = ({items, currentItem, setCurrentItem}) => {
  document.onkeydown = e => {
    console.log(currentItem);
    e = e || window.event;
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
    if (e.keyCode + '' === '38') {
      !currentItem
        ? setCurrentItem(items[items.length - 1])
        : setCurrentItem(
            items[items.findIndex(e => e.id === currentItem.id) - 1],
          );
    } else if (e.keyCode + '' === '40') {
      !currentItem
        ? setCurrentItem(items[0])
        : setCurrentItem(
            items[items.findIndex(e => e.id === currentItem.id) + 1],
          );
    }
  };
};

const Table = ({items, attributes, currentItem, setCurrentItem}) => {
  handleKeysMovement({items, currentItem, setCurrentItem});
  return (
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
        <Body
          items={items}
          attributes={attributes}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      </tbody>
    </table>
  );
};

export default Table;
