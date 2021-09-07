import ItemListItem from "./ItemListItem";
import styles from "./ItemList.css";

function ItemList(props) {
  return (
    <ul
      className={
        styles["no-bullets"] + (props.ghost ? " " + styles["ghost"] : "")
      }
    >
      {props.list?.map((item) => {
        return (
          <ItemListItem
            key={item.id}
            id={item.id}
            allowEdit={props.allowEdit}
            onDeleted={props.onDeleted}
            prompt={item.prompt}
            answer={item.answer}
            image={item.image}
            editItemCallback={props.editItemCallback}
          />
        );
      })}
    </ul>
  );
}

export default ItemList;
