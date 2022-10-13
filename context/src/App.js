import logo from './logo.svg';
import './App.css';
import ContentCard from "./Components/ContentCard";
import { ThemeProvider } from './Context/ThemeContext';
import TopNavbar from './Components/TopNavbar';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <TopNavbar></TopNavbar>
        <ContentCard></ContentCard>
      </ThemeProvider>
    </div>
  );
}

export default App;
