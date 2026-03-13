import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SslPolicyPage from "./pages/SslPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import WebsiteDisclaimerPage from "./pages/WebsiteDisclaimerPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/ssl"
        element={
          <Layout>
            <SslPolicyPage />
          </Layout>
        }
      />      
	  <Route
        path="/terms"
        element={
          <Layout>
            <TermsOfUsePage />
          </Layout>
        }
      />
	  <Route
		  path="/privacy"
		  element={
			<Layout>
			  <PrivacyPolicyPage />
			</Layout>
		  }
		/>
		
		<Route
		  path="/cookies"
		  element={
			<Layout>
			  <CookiePolicyPage />
			</Layout>
		  }
		/>
		
		<Route
		  path="/disclaimer"
		  element={
			<Layout>
			  <WebsiteDisclaimerPage />
			</Layout>
		  }
		/>
		
		<Route
		  path="/contact"
		  element={
			<Layout>
			  <ContactPage />
			</Layout>
		  }
		/>
		
		<Route
		  path="/about"
		  element={
			<Layout>
			  <AboutUsPage />
			</Layout>
		  }
		/>		
		<Route
		  path="/services"
		  element={
			<Layout>
			  <ServicesPage />
			</Layout>
		  }
		/>
		
		<Route
		  path="/pricing"
		  element={
			<Layout>
			  <PricingPage />
			</Layout>
		  }
		/>
		
    </Routes>
  );
}

export default App;