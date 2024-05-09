import MainNavItem from "./MainNavItem.jsx";
import "./mainNav.scss";

const MainNav = (props) => {
  console.log("props", props);
  return (
    <div className="main-nav">
      <nav>
        <ul className="main-nav-top-list">
          {props.menuItems.map((item, index) => {
            if (!item.parentId) {
              const currentPage = props.pathname === item.uri;
              return (
                <MainNavItem
                  currentPage={currentPage}
                  item={item}
                  index={index}
                />
              );
            } else {
              return null;
            }
          })}
          <li>
            <a href="https://members.emc2services.ca/">Book Now</a>
          </li>
          <li>
            <a
              className="main-nav-btn-two"
              btnstyle="two"
              href="https://members.emc2services.ca/login/true"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
