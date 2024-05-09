import React from "react";

const MainNavItem = ({ item, currentPage, index }) => {
  return (
    <li class={`main-nav-top-list-item main-nav-top-list-item-${index + 1}`}>
      <a class={`${currentPage ? "main-nav-current" : ""}`} href={item.uri}>
        {item.label}
      </a>
      {item.childItems.nodes.length > 0 ? (
        <ul class="main-nav-sub-menu">
          {item.childItems.nodes.map((subItem, subIndex) => {
            return (
              <l key={subIndex}>
                <a href={subItem.uri}>{subItem.label}</a>
              </l>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default MainNavItem;
