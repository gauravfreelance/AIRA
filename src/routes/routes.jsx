import App from "../App";
import ErrorPage from "../routes/ErrorScreen";
import AboutUs from "../views/aboutus/AboutUs";
import Blogs from "../views/blogs/Blogs";
import ContactUs from "../views/contactus/ContactUs";
import Home from "../views/home/Home";
import HyperAutomation from "../views/hyperautomation/HyperAutomation";
import Leadership_Team from "../views/LeadershipTeam/LeadershipTeam";
import Platform from "../views/platform/Platform";
import Resources from "../views/resources/Resources";
import Solutions from "../views/solutions/Solutions";
import CSR from "../views/csr/CSR";
import { createBrowserRouter } from "react-router-dom";
import SmartBots from "../views/platform/smartbot/SmartBots";
import IDP from "../views/platform/idp/IDP";
import AIML from "../views/platform/aiml/AIML";
import ProcessMining from "../views/platform/processmining/ProcessMining";
import NLP from "../views/platform/nlp/NLP";
import AdvancedAnalytics from "../views/platform/advancedanalytics/AdvancedAnalytics";
import Careers from "../views/company/careers/Careers";
import Whitepapers from "../views/whitepapers/Whitepapers";
import Brochures from "../views/brochures/Brochures";
import UseCases from "../views/usecases/UseCases";
import Events from "../views/events/Events";
import Blog from "../views/blogs/Blog";
import PrivacyPolicy from "../views/footerTerms/PrivacyPolicy";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import PartnerPortal from "../views/partnerPortal/PartnerPortal";
import Pricing from "../views/pricing/Pricing";
import Solution from "../views/solution/Solution";
import FindPartner from "../views/findPatient/FindPartner";
import Dashboard from "../views/Admin/Dashboard";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/leadership_team",
        element: <Leadership_Team />
      },
      {
        path: "/platform",
        element: <Platform />,
      },
      {
        path: "/solutions",
        element: <Solutions />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:1",
        element: <Blog />,
      },
      {
        path: "/blogs",
        element: <Resources />,
      },
      {
        path: "/about_us",
        element: <AboutUs />,
      },
      {
        path: "/hyperautomation",
        element: <HyperAutomation />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
        index: true,
      },
      {
        path: "/csr",
        element: <CSR />,
        index: true,
      },
      {
        path: "/rpa",
        element: <SmartBots />,
        index: true,
      },
      {
        path: "/idp",
        element: <IDP />,
        index: true,
      },
      {
        path: "/aiml",
        element: <AIML />,
        index: true,
      },
      {
        path: "/process_mining",
        element: <ProcessMining />,
        index: true,
      },
      {
        path: "/nlp",
        element: <NLP />,
        index: true,
      },
      {
        path: "/advancedAnalytics",
        element: <AdvancedAnalytics />,
        index: true,
      },
      {
        path: "/careers",
        element: <Careers />,
        index: true,
      },
      {
        path: "/whitepapers",
        element: <Whitepapers />,
        index: true,
      },
      {
        path: "/brochures",
        element: <Brochures />,
        index: true,
      },
      {
        path: "/usecases",
        element: <UseCases />,
        index: true,
      },
      {
        path: "/events",
        element: <Events />,
        index: true,
      },
      {
        path: "/privacy_policy/",
        element: <PrivacyPolicy />,
        index: true,
      },
      {
        path: "/portal",
        element: <PartnerPortal />,
        
      },
      {
        path: "/login",
        element: <Login />,
        
      },
      {
        path: "/register",
        element: <Register />,
        
      },
      {
        path: "/pricing",
        element: <Pricing />,
        
      },
      {
        path: "/solution",
        element: <Solution/>,
        
      },
      {
        path: "/findpartner",
        element: <FindPartner/>,
        
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
        
      },
    ],
  },
]);
