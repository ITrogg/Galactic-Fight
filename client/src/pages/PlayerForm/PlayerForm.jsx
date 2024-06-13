import "./PlayerForm.css";

function PlayerForm(setName) {
  const handleSubmit = () => {};

  return (
    <section className="background-page">
      <div className="page-container">
        <div className="form-container">
          <form>
            <label htmlFor="avatar" className="avatar-label">
              Choisie ton avatar
            </label>
            <div className="avatar-selection">
              <img
                src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
                alt=""
              />
            </div>
            <label htmlFor="name" className="name-label">
              Quel est ton nom ?
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
                className="input-form"
              />
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className="button-style button-form"
            >
              valider
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PlayerForm;
