export const getLocalDateTime = (dateValue) => {
  const date = new Date(dateValue);
  return date.toLocaleString();
};

export const getLocalDate = (dateValue) => {
  const date = new Date(dateValue);
  return date.toLocaleDateString();
};

// export const getCurrentLocalDateTime = () => getLocalDateTime(new Date().getTime());
