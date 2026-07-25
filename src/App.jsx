import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import FacilitiesPage from './modules/facilities/pages/FacilitiesPage';
import FacilityARF from './modules/facilities/pages/FacilityARF';
import FacilityPathology from './modules/facilities/pages/FacilityPathology';
import FacilityQAU from './modules/facilities/pages/FacilityQAU';
import FacilityTICO from './modules/facilities/pages/FacilityTICO';
import FacilityEHS from './modules/facilities/pages/FacilityEHS';
import FacilityInVitro from './modules/facilities/pages/FacilityInVitro';
import FacilityAnalytical from './modules/facilities/pages/FacilityAnalytical';
import FacilityIT from './modules/facilities/pages/FacilityIT';
import FacilityDocumentControl from './modules/facilities/pages/FacilityDocumentControl';
import FacilityEcotox from './modules/facilities/pages/FacilityEcotox';
import FacilityArchives from './modules/facilities/pages/FacilityArchives';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import DrWangikar from './modules/directors/pages/DrWangikar';
import MrsWangikar from './modules/directors/pages/MrsWangikar';
import Awards from './pages/Awards';
import EventsPage from './modules/events/pages/EventsPage';
import GalleryPage from './modules/gallery/pages/GalleryPage';
import News from './pages/News';
import Careers from './pages/Careers';

// Service Detail Pages
import ServiceToxicology from './modules/services/pages/ServiceToxicology';
import ServicePharmacology from './modules/services/pages/ServicePharmacology';
import ServicePharmacokinetic from './modules/services/pages/ServicePharmacokinetic';
import ServicePathology from './modules/services/pages/ServicePathology';
import ServiceBiocompatibility from './modules/services/pages/ServiceBiocompatibility';
import ServiceAnalytical from './modules/services/pages/ServiceAnalytical';
import ServiceEcotoxicological from './modules/services/pages/ServiceEcotoxicological';
import ServiceRiskAssessment from './modules/services/pages/ServiceRiskAssessment';
import ServiceConsultancy from './modules/services/pages/ServiceConsultancy';
import ServiceAnimalClinical from './modules/services/pages/ServiceAnimalClinical';
import ServicePhysicalChemical from './modules/services/pages/ServicePhysicalChemical';

// Industry Detail Pages
import IndustryPharmaceutical from './modules/industries/pages/IndustryPharmaceutical';
import IndustryAgrochemicals from './modules/industries/pages/IndustryAgrochemicals';
import IndustryMedicalDevices from './modules/industries/pages/IndustryMedicalDevices';
import IndustryBiopharmaBiotech from './modules/industries/pages/IndustryBiopharmaBiotech';
import IndustryAnimalClinicalTrials from './modules/industries/pages/IndustryAnimalClinicalTrials';
import IndustryRiskAssessment from './modules/industries/pages/IndustryRiskAssessment';
import IndustryConsultancy from './modules/industries/pages/IndustryConsultancy';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="facilities/arf" element={<FacilityARF />} />
          <Route path="facilities/pathology" element={<FacilityPathology />} />
          <Route path="facilities/qau" element={<FacilityQAU />} />
          <Route path="facilities/tico" element={<FacilityTICO />} />
          <Route path="facilities/ehs" element={<FacilityEHS />} />
          <Route path="facilities/in-vitro" element={<FacilityInVitro />} />
          <Route path="facilities/analytical" element={<FacilityAnalytical />} />
          <Route path="facilities/it" element={<FacilityIT />} />
          <Route path="facilities/document-control" element={<FacilityDocumentControl />} />
          <Route path="facilities/ecotox" element={<FacilityEcotox />} />
          <Route path="facilities/archives" element={<FacilityArchives />} />
          <Route path="awards" element={<Awards />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="directors/dr-wangikar" element={<DrWangikar />} />
          <Route path="directors/mrs-wangikar" element={<MrsWangikar />} />
          <Route path="news" element={<News />} />
          <Route path="careers" element={<Careers />} />

          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/toxicology" element={<ServiceToxicology />} />
          <Route path="services/pharmacology" element={<ServicePharmacology />} />
          <Route path="services/pharmacokinetic" element={<ServicePharmacokinetic />} />
          <Route path="services/pathology" element={<ServicePathology />} />
          <Route path="services/biocompatibility" element={<ServiceBiocompatibility />} />
          <Route path="services/analytical-bioanalytical" element={<ServiceAnalytical />} />
          <Route path="services/ecotoxicological" element={<ServiceEcotoxicological />} />
          <Route path="services/risk-assessment" element={<ServiceRiskAssessment />} />
          <Route path="services/consultancy-training" element={<ServiceConsultancy />} />
          <Route path="services/animal-clinical" element={<ServiceAnimalClinical />} />
          <Route path="services/physical-chemical" element={<ServicePhysicalChemical />} />

          {/* Industry Routes */}
          <Route path="industries" element={<Industries />} />
          <Route path="industries/pharmaceutical" element={<IndustryPharmaceutical />} />
          <Route path="industries/agrochemicals" element={<IndustryAgrochemicals />} />
          <Route path="industries/medical-devices" element={<IndustryMedicalDevices />} />
          <Route path="industries/biopharma-biotech" element={<IndustryBiopharmaBiotech />} />
          <Route path="industries/animal-clinical-trials" element={<IndustryAnimalClinicalTrials />} />
          <Route path="industries/risk-assessment" element={<IndustryRiskAssessment />} />
          <Route path="industries/consultancy" element={<IndustryConsultancy />} />

          <Route path="*" element={
            <div className="container mx-auto px-4 py-32 text-center">
              <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
              <p className="text-xl">Page not found</p>
            </div>
          } />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
