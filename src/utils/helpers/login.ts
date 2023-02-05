export const isValidUserName = (userName: string): boolean => {
  const emailRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
  return emailRegex.test(userName);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  const emailRegex = /^.{8,}$/;
  return emailRegex.test(password);
};
