import logo from './logo.svg';
import './App.css';
import ContentCard from "./Components/ContentCard";
import { ThemeProvider } from './Context/ThemeContext';
import TopNavbar from './Components/TopNavbar';
import { useTheme } from "./Context/ThemeContext";


function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App">
      <div className={theme}>
        <TopNavbar></TopNavbar>
        <ContentCard></ContentCard>
      </div>
    </div>
  );
}

export default App;
