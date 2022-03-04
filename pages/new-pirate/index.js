import NewPirateForm from "../../components/pirates/NewPirateForm";

function NewPiratePage() {
  function addPirateHandler(enteredPirateData) {
    console.log(enteredPirateData);
  }

  return <NewPirateForm onAddPirate={addPirateHandler} />;
}

export default NewPiratePage;
