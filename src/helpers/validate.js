export const validate = (value, fields) => {
  switch (value) {
    case 0:
      return equalityTitle(fields.title, fields.description);
    case 1:
      return equality(fields.education);
    case 2:
      return equality(fields.language);
    case 3:
      return false;
    case 4:
      return equalityTitle(fields.phone, fields.tags);

    default:
      return true;
  }
};

const equality = fields => {
  let a = false;
  if (typeof fields === "object") {
    fields.map(item => {
      if (Object.keys(item).length > 0) {
        for (let key in item) {
          Object.keys(String(item[key]).length) < 1 ? (a = false) : (a = false)
        }
      } else {
        a = true;
      }
    });
  }
  return a;
};

const equalityTitle = (...fields) => {
  let a = false;
  for (let i = 0; i < fields.length; i++) {
    fields[i].length < 5 ? (a = true) : (a = false);
  }
  return a;
};
