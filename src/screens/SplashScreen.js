import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function SplashScreen({ setConsent }) {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1605910470315-abac78c52d73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1857&q=80')",
        backgroundColor: "#282c34",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "RGBA(40, 44, 52, 0.6)",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            padding: "30px",
            textAlign: "center",
            color: "#aaa",
          }}
        >
          Deviance
        </h1>
        <div>Welcome to Deviance, the Adult Only board game!</div>
        <div className="mx-5 p-5">
          <p>
            This website is for adults only. Whilst the game contains no
            pornographic images, it does contain material of an adult nature.
            Some of the actions describe explicit sexual acts. If you are
            offended by such acts, behaviours or descriptions, please do not
            view this site.
          </p>
          <p>
            By playing Deviance, you certify that you are an adult, age 18 or
            over, and that you consent to see materials of a sexual nature.
          </p>
        </div>
        <div>
          <Button
            className="m-3"
            onClick={() => {
              window.location.href = "https://theuselessweb.com/";
            }}
          >
            No, i'm under 18
          </Button>

          <Link to="/game">
            <Button color="primary" className="m-3">
              Yes, I'm over 18
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
