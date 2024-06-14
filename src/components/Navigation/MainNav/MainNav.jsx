import MainNavItem from "./MainNavItem.jsx";
import "./mainNav.scss";

const MainNav = (props) => {
  return (
    <div className="main-nav">
      <nav className="main-nav-top">
        <ul className="main-nav-top-list">
          {props.menuItems.map((item, index) => {
            if (!item.parentId) {
              const currentPage = props.pathname === item.uri;
              return (
                <MainNavItem
                  currentPage={currentPage}
                  item={item}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
          <li className="main-nav-top-list-item main-nav-top-list-item-cta-one">
            <a
              target="_blank"
              rel="noopener"
              ttile="Book Now - Clicking this link witll open a new browser window"
              href={props.siteWideOptions.mainBookItUrl}
            >
              Book Now
            </a>
          </li>
          <li className="main-nav-top-list-item main-nav-top-list-item-cta-two">
            <a
              target="_blank"
              rel="noopener"
              href={props.siteWideOptions.memberLoginUrl}
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
