const MobileSubMenuItem = ({ items }) => {
  console.log("items", items);
  return (
    <>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.uri}>{item.label}</a>
          </li>
        );
      })}
    </>
  );
};

export default MobileSubMenuItem;
