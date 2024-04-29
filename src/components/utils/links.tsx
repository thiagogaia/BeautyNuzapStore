export const formatAndFollowUrl = (path: string) => {
  return (window.location.href = window.location.origin + "/" + path);
};

export const genericUser = {
  email: "email@email.com",
  password: "123456789",
};
