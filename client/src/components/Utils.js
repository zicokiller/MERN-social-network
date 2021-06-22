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

/* fonction qui va retourner soit "true" 
soit "false" à la question isEmpty, "true" = empty */
export const isEmpty = (value) => {
  return value === undefined || value == null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim(value).length === 0)


}
