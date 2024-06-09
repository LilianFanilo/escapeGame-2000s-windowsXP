import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import WindowsXP from "./components/WindowsXP/WindowsXP";

function App() {
  // document.addEventListener("keydown", function (event) {
  //   if (event.ctrlKey && event.shiftKey && event.key === "I") {
  //     event.preventDefault();
  //     console.log("CTRL + SHIFT + I is disabled.");
  //   }
  // });

  // document.addEventListener("contextmenu", function (event) {
  //   event.preventDefault();
  // });

  return (
    <>
      <WindowsXP />
      <LoginPage />
    </>
  );
}

export default App;
