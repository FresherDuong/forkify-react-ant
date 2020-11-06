import React from 'react';
import CardCustomize from './../../../components/UI/CardCustomize/CardCustomize';
import { useSelector } from 'react-redux';

const HomeMeals = React.memo((props) => {
  console.log('[HomeMeals] rendered');
  const currentPage = useSelector((state) => state.home.currentPage);

  const allMeals = props.meals
    .slice((currentPage - 1) * 9, (currentPage - 1) * 9 + 9)
    .map((meal) => {
      return (
        <CardCustomize
          key={meal.recipe_id}
          mealTitle={meal.title}
          mealImage={meal.image_url}
          mealPrice={9.99}
          mealPublisher={meal.publisher}
          publisherUrl={meal.publisher_url}
          onOrderClicked={() =>
            props.showDrawer(meal.recipe_id, meal.title, 9.99)
          }
          openModal={() => props.openModal(meal.recipe_id)}
          onAddToFav={() => props.addToFavorite(meal)}
        />
      );
    });

  return <React.Fragment>{allMeals}</React.Fragment>;
});

export default HomeMeals;
