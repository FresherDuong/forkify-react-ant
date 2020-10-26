export { fetchMeals, setHomeCurrentPage, fetchTopSearch } from './home';
export {
  addToFavorites,
  removeFromFavorites,
  increaseMealQuantity,
  reloadFavoritesData,
  deleteAllFavorites,
} from './favorites';
export {
  openIngredientModal,
  closeIngredientModal,
  fetchIngredients,
} from './ingredients';

export { auth, authCheckState, logOut } from './auth';

export { orderNow, resetOrderData } from './order';

export { fetchHistoryData } from './history';
