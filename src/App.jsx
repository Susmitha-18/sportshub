import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import HomeDashboard from "./HomeDashboard";
import Login from "./Login";
import Signup from "./Signup";
import ProfileDetails from "./ProfileDetails"; 
import FitnessTest from "./FitnessTest";
import PerformanceInsights from "./PerformanceInsights";
import TrainingGuidance from "./TrainingGuidance"; 
import Support from "./Support"; 



// ----------- Home Page (Landing with Login / Signup toggle) -----------
function Home({ articles, loading, error, getSportsNews }) {
  const [isSignup, setIsSignup] = React.useState(false); // toggle state
  const navigate = useNavigate(); // for navigation

  // Handle login redirect
  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add validation/auth logic if needed
    navigate("/home");
  };

  // Handle signup redirect (optional)
  const handleSignup = (e) => {
    e.preventDefault();
    // Here you can add signup logic if needed
    navigate("/home");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Side - Welcome Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 bg-light">
          <h1 className="fw-bold text-primary">🏆 Welcome to SportsHub</h1>
          <p className="text-muted fs-5">Your daily sports updates</p>

          <div className="mt-4">
            <h3 className="fw-bold">Stay Updated</h3>
            <p className="text-secondary">
              Get live scores, match highlights, and the latest sports news — all in one place!
            </p>
          </div>
        </div>

        {/* Right Side - Login / Signup Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-white shadow">
          <div className="card p-4 w-75" style={{ borderRadius: "15px" }}>
            
            {/* Conditional Rendering */}
            {isSignup ? (
              <>
                <h2 className="text-center mb-4 text-success">Create Account</h2>
                <form onSubmit={handleSignup}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input type="text" className="form-control" placeholder="Choose a username" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" placeholder="Create a password" />
                  </div>
                  <button type="submit" className="btn btn-success w-100 mt-2">
                    Sign Up
                  </button>
                </form>
                <div className="text-center mt-3">
                  <p>
                    Already have an account?{" "}
                    <span
                      onClick={() => setIsSignup(false)}
                      className="fw-bold text-primary"
                      style={{ cursor: "pointer" }}
                    >
                      Login
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-center mb-4 text-primary">Login</h2>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Login
                  </button>
                </form>
                <div className="text-center mt-3">
                  <p>
                    New to <span className="fw-bold text-success">SportsHub</span>?{" "}
                    <span
                      onClick={() => setIsSignup(true)}
                      className="fw-bold text-success"
                      style={{ cursor: "pointer" }}
                    >
                      Create Account
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------- Main App -----------
export default function App() {
  const [articles, setArticles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const getSportsNews = async () => {
    setLoading(true);
    setError("");
    const apiKey = "pub_e21931f487dd452088157c55c9096462";
    const url = `https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=${apiKey}`;
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      if (!response.data.articles || response.data.articles.length === 0) {
        setError("No news found. Try again later.");
      }
    } catch (err) {
      setError("Error fetching news. Please check your API key and network.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            articles={articles}
            loading={loading}
            error={error}
            getSportsNews={getSportsNews}
          />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<HomeDashboard />} />
      <Route path="/profile-details" element={<ProfileDetails />} /> {/* new route */}
      <Route path="/fitness-details" element={<FitnessTest />} />
      <Route path="/insights-details" element={<PerformanceInsights />} />
      <Route path="/training-details" element={<TrainingGuidance />} /> {/* 👈 Add here */}
      <Route path="/support-details" element={<Support />} />

    </Routes>
  );
}
