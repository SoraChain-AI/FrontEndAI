import { Routes, Route } from "react-router-dom";
import { SoraChainDashboard } from "./components/DashBoard/SoraChainDashboard";
import { Home } from "./components/Home/Home";
import { AccountProvider } from "./Contexts/AccountContext";

function App() {
  // return <Page />;
  return (
    <AccountProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<SoraChainDashboard />} />
      </Routes>
    </AccountProvider>
  );
}
export default App;
