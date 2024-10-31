import "./navButton.scss";

const NavButton = ({ handleMenu, disabled, state }) => {
  return (
    <div className={`menu ${state.menuName === "Close" ? "menu-active" : ""}`}>
      <button
        type="button"
        className="menu-button"
        onClick={handleMenu}
        disabled={disabled}
      >
        <span className="visually-hidden">Menu</span>
        <span />
      </button>
    </div>
  );
};

export default NavButton;
