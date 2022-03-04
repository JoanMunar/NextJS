import PirateItem from './PirateItem';
import classes from './PirateList.module.css';

function PirateList(props) {
  return (
    <ul className={classes.list}>
      {props.pirates.map((pirate) => (
        <PirateItem
          key={pirate.id}
          id={pirate.id}
          image={pirate.image}
          name={pirate.name}
          address={pirate.address}
        />
      ))}
    </ul>
  );
}

export default PirateList;
