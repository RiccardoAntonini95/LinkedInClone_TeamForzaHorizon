// se servono più dati per manipolare orari, fate sapere a Gae
export const convertTime = (stringOrNumber) => {
  const date = new Date(stringOrNumber);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return { day, month, year };
};
