export const showNavigation = () => {
  const sn = document.querySelector(".Links-navigation");
  sn.classList.toggle("Active-links-navigation");
};

export const closeNavigation = () => {
  const cn = document.querySelector(".Links-navigation");
  cn.classList.remove("Active-links-navigation");
};
