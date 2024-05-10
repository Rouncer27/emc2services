import "./menuItem.scss";

const MenuItem = ({ href, title, subMenu }) => {
  console.log("SUB MENU HERE: ", subMenu);

  return (
    <div className="menu-links-item">
      <li>
        <a href={href}>{title}</a>
      </li>
    </div>
  );
};

export default MenuItem;
