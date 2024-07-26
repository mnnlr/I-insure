import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import SidebarHorizontal from "./Components/SidebarHorizontal";
import DownloadPolicy from "./Components/DownloadPolicy";
import Grievance from "./Components/Grievance";
import MotorSection from "./Components/MotorSection";
import MotorInsuranceForm from "./Components/MotorInsuranceForm";
import MotorInsurancePage from "./Components/MotorInsurancePage";
import InsurancePayment from "./Components/InsurancePayment";
import HealthInsurance from "./Components/HealthInsurance";
import MarinIsurance from "./Components/MarinInsurance";
import FireInsurance from "./Components/FireInsurance";
import Home from "./Components/Home";
import EngineeringInsurance from "./Components/EngineeringInsurance";
import RuralInsurance from "./Components/RuralInsurance";
import MiscellaneousInsurance from "./Components/MiscellaneousInsurance";
import PMSBY from "./Components/PMSBY";
import WithdrawnSection from "./Components/WithdrawnSection";

function App() {
  return (
    <>
      <Router>
        <SidebarHorizontal>
         
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/downloadpolicy" element={<DownloadPolicy />} />
          <Route exact path="/grievance" element={<Grievance />} />
          <Route exact path="/product" element={<MotorSection />} />
          <Route exact path="/product/motorinsuranceform" element={<MotorInsuranceForm />} />
          <Route exact path="/product/motorinsuranceform/motorinsurancepage" element={<MotorInsurancePage />} />
          <Route exact path="/product/motorinsuranceform/motorinsurancepage/insurancepayment" element={<InsurancePayment />} />
          <Route exact path="/product/healthinsuranceform" element={<HealthInsurance/>} />
          <Route exact path="/product/marininsuranceform" element={<MarinIsurance/>} />
          <Route exact path="/product/fireinsuranceform" element={<FireInsurance/>} />
          <Route exact path="/product/engineeringinsuranceform" element={<EngineeringInsurance/>} />
          <Route exact path="/product/ruralinsuranceform" element={<RuralInsurance/>} />
          <Route exact path="/product/miscellaneousinsuranceform" element={<MiscellaneousInsurance/>} />
          <Route exact path="/product/pmfbyinsuranceform" element={<PMSBY/>} />
          <Route exact path="/product/pmsbyinsuranceform" element={<PMSBY/>} />
          <Route exact path="/product/withdrawnsection" element={<WithdrawnSection/>} />

        </Routes>
        </SidebarHorizontal>
      </Router>
    </>
  );
}

export default App;
