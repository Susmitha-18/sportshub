import React, { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setLoading(true);

    try {
      if (isRegister) {
        console.log("Registering user...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Firebase Auth created user:", user.uid);

        // Store username & email in Firestore
        await setDoc(doc(db, "users", user.uid), {
          username: username,
          email: email
        });
        console.log("User data saved in Firestore:", user.uid);

        alert("User registered successfully!");
      } else {
        console.log("Logging in user...");
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
        alert("Login successful!");
      }

      // Clear form fields
      setEmail("");
      setPassword("");
      setUsername("");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{isRegister ? "Register" : "Login"}</h2>
      <form
        className="mt-4"
        style={{ maxWidth: "400px", margin: "0 auto" }}
        onSubmit={handleSubmit}
      >
        {isRegister && (
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? (isRegister ? "Registering..." : "Logging in...") : isRegister ? "Register" : "Login"}
        </button>
      </form>

      <p className="text-center mt-3">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          type="button"
          className="btn btn-link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Login" : "Register"}
        </button>
      </p>
    </div>
  );
}

export default Login;
