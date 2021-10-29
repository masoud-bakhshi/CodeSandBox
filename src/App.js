// import BasicTree from "./CodeEditor/TreeBranch/FolderTree";
import "./styles.css";
import SideBar from "./CodeEditor/SideBar";
import ThemeProvider from "./Material/PrimaryColor";
export default function App() {
  return (
    <div
      className="App"
      style={{ background: "#112233", color: "#ffff", height: "100vh" }}
    >
      <>
        <ThemeProvider>
          <SideBar />
        </ThemeProvider>
      </>
    </div>
  );
}
