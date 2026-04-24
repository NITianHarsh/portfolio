import React, { useState, useEffect } from "react";

function Pre() {
  //const [user, setUser] = useState({ name: "", email: "" });
  //const [isValid, setIsValid] = useState(false);
  //const [entered, setEntered] = useState(false);

  const [showLoader, setShowLoader] = useState(true);
  //const [showSkip, setShowSkip] = useState(false);

  // 🔹 Initial loader only
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Check if user already entered before
  /*
  useEffect(() => {
    const saved = localStorage.getItem("portfolioUser");
    if (saved) {
      setEntered(true);
    }
  }, []);
  */

  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  */

  /*
  useEffect(() => {
    const nameValid = user.name.trim().length >= 3;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const emailValid = emailRegex.test(user.email);

    setIsValid(nameValid && emailValid);
  }, [user]);
  */

  // Start loader AFTER entering
  /*
  useEffect(() => {
    if (entered) {
      setShowLoader(true);

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [entered]);
  */

  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setEntered(true);

    try {
      await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.email)}`,
      });

      localStorage.setItem("portfolioUser", JSON.stringify(user));
    } catch (err) {
      console.error("Error:", err);
    }
  };
  */

  // 🔹 Step 1: Show form
  /*
  if (!entered) {
    return (
      <div style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Welcome 👋</h2>
          <p style={{ fontSize: "14px", opacity: 0.7 }}>
            Enter details to continue
          </p>

          <input
            type="text"
            placeholder="Your Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            style={styles.input}
          />

          <button
            type="submit"
            disabled={!isValid}
            style={{
              ...styles.button,
              opacity: isValid ? 1 : 0.5,
            }}
          >
            Enter
          </button>

          {!isValid && (
            <p style={styles.error}>
              Name ≥ 3 chars & valid email required
            </p>
          )}

          {showSkip && (
            <button
              type="button"
              onClick={() => setEntered(true)}
              style={styles.skip}
            >
              Skip
            </button>
          )}
        </form>
      </div>
    );
  }
  */

  // 🔹 Step 2: Show loader
  if (showLoader) {
    return <div id="preloader"></div>;
  }

  // 🔹 Step 3: Show main app
  return null;
}

/*
const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    background: "#171126",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "30px",
    background: "#613182",
    borderRadius: "12px",
    color: "white",
    minWidth: "280px",
    textAlign: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#3c096c",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  skip: {
    marginTop: "2px",
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    cursor: "pointer",
    fontSize: "12px",
  },
  error: {
    color: "#EEF300",
    fontSize: "12px",
  },
};
*/

export default Pre;
