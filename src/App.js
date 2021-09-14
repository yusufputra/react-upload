import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

axios
  .get("https://f570d898-42b4-4944-ad33-03dd166608fa.mock.pstmn.io/transaksi",{
    params:{
      id_customer: 1
    }
  })
  .then((ress) => {
    console.log(ress.data.data);
  });

const uploadImage = (e) => {
  console.log(e.target.files[0].size);
  let formData = new FormData();
  if (
    e.target.files[0].type === "image/jpeg" &&
    e.target.files[0].size / 1024 / 1024 < 1
  ) {
    formData.append("image", e.target.files[0]);
    console.log(formData);
    axios
      .post("https://api.imgur.com/3/image", formData, {
        headers: {
          Authorization: "Client-ID b9b90b575a11367",
        },
      })
      .then((ress) => {
        console.log(ress);
      });
  } else {
    console.log("tidak upload");
    if (e.target.files[0].type !== "image/jpeg") {
      alert("file bukan jpeg");
    }
    if ((e.target.files[0].size / 1024 / 1024) > 1) {
      alert("ukuran file terlalu besar");
    }
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="file" id="image" onChange={uploadImage} />
      </header>
    </div>
  );
}

export default App;
