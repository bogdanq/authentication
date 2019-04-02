export const getFavorite = (list, user) => {
  return user.firstName
    ? 
      user.favoriteSummry.includes(list._id)
        ? { ...list, isFavorite: true }
        : { ...list, isFavorite: false }
    : list;
};