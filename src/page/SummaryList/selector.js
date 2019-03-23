export const getFavorite = (list, user) => {
  return user.firstName
    ? list.map(obj =>
        user.favoriteSummry.includes(obj._id)
          ? { ...obj, isFavorite: true }
          : { ...obj, isFavorite: false }
      )
    : list;
};