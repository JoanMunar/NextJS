import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>One Piece Pirates</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Pirates</Link>
          </li>
          <li>
            <Link href="/new-pirate">Add New Pirate</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
