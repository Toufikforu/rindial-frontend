import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SslPolicyPage from "./pages/SslPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import WebsiteDisclaimerPage from "./pages/WebsiteDisclaimerPage";
import ContactPage from "./pages/ContactPage";

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
    </Routes>
  );
}

export default App;