import "./App.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
  });
  const [datas, setDatas] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
  });
  const isAnyFieldEmpty = Object.values(data).some((value) => !value);

  const handleValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleData = (e) => {
    e.preventDefault();
    setDatas(data);
  };
  return (
    <>
      <section>
        <form action="#">
          <input
            value={data.name}
            name="name"
            onChange={handleValue}
            type="text"
            placeholder="Adiniz"
          />
          <input
            value={data.surname}
            name="surname"
            onChange={handleValue}
            type="text"
            placeholder="Soyadiniz"
          />
          <input
            value={data.email}
            name="email"
            onChange={handleValue}
            type="email"
            placeholder="Mailiniz"
          />
          <input
            value={data.age}
            name="age"
            onChange={handleValue}
            type="number"
            placeholder="Yashiniz"
          />
          <button onClick={handleData}>Gonder</button>
        </form>
      </section>
      <div className="title">
        {datas ? (
          <>
            <p>Adiniz:{datas.name}</p>
            <p>Soyadiniz:{datas.surname}</p>
            <p>Email:{datas.email} </p>
            <p>Yashiniz: {datas.age}</p>
          </>
        ) : (
          ""
        )}
      </div>

      {isAnyFieldEmpty && (
        <h1 style={{ display: isAnyFieldEmpty ? "block" : "none" }}>
          Melumatlar tam deyil !
        </h1>
      )}
    </>
  );
}

export default App;
