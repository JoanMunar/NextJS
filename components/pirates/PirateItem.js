import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./PirateItem.module.css";

function PirateItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.name);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PirateItem;
