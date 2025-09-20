import React from "react";

export default function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-success">Create Account</h2>

        {/* Signup Form */}
        <form>
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

        {/* Link back to Login */}
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className="fw-bold text-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
