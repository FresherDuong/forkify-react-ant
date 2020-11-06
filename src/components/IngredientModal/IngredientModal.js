import React, { useEffect, useCallback } from 'react';
import { Modal, Timeline, Badge, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreator from './../../store/actions/index';

const IngredientModal = React.memo(() => {
  // console.log('[IngredientModal] render');
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const currentIngID = useSelector((state) => state.ingredients.currentIngID);
  const ingredientsLoading = useSelector(
    (state) => state.ingredients.ingredientsLoading
  );
  const modalEnable = useSelector((state) => state.ingredients.modalEnable);

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentIngID) {
      dispatch(actionCreator.fetchIngredients(currentIngID));
    }
  }, [dispatch, currentIngID]);

  const closeModal = useCallback(() => {
    dispatch(actionCreator.closeIngredientModal());
  }, [dispatch]);

  let titleStatus = 'Loading...';
  let mealIngredients = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Spin size="large" />
    </div>
  );

  if (!ingredientsLoading && ingredients) {
    titleStatus = ingredients.title;
    mealIngredients = (
      <Timeline>
        {ingredients.ingredients.map((ing, index) => {
          return <Timeline.Item key={index}>{ing}</Timeline.Item>;
        })}
        <Badge
          count={`Top ${Math.floor(
            ingredients.social_rank
          )} cuisines in Forkify`}
          style={{ backgroundColor: '#f6b585' }}
        />
        <Badge
          count={`ID: ${ingredients.recipe_id}`}
          style={{ backgroundColor: '#87d068' }}
        />
      </Timeline>
    );
  }

  return (
    <Modal
      title={titleStatus}
      centered
      visible={modalEnable}
      onOk={closeModal}
      onCancel={closeModal}
    >
      {mealIngredients}
    </Modal>
  );
});

export default IngredientModal;
