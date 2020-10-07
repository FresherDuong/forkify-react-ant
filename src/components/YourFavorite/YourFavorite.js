import React from 'react';
import ActionButton from './../UI/ActionsButton/ActionButton';
import ItemDetails from './../ItemDetails/ItemDetails';

const YourFavorite = (props) => {
  return (
    <ItemDetails
      favImg={props.favImg}
      favTitle={props.favTitle}
      favPrice={props.favPrice}
      favPublisher={props.favPublisher}
    >
      <ActionButton
        onDeleteFav={props.onDeleteFav}
        onShowIng={props.onShowIng}
      />
    </ItemDetails>
  );
};
export default YourFavorite;
