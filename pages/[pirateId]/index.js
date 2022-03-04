function PirateDetails(props) {
  return (
    <>
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>Pokemon</p>
      <p>{props.description}</p>
    </>
  );
}

export default PirateDetails;
