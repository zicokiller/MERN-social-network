/* fonction permettant de parser les dates
 (ici la date de création de profil) */ 
export const dateParser = (num) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  let timestamp = Date.parse(num);
  let date = new Date(timestamp).toLocaleDateString("fr-FR", options);
  return date.toString();
};

