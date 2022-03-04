import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { Link } from "react-router-dom";
import Login from "./Login";

import { SectionContainer } from "./StyledComponents/SectionContainer";
import { FormContainer } from "./StyledComponents/FormContainer";
import { InputField, Button } from "./StyledComponents/InputButton";
import {
  ShowMarks,
  ErrMsg,
  OffScreen,
  Instructions,
} from "./StyledComponents/ErrorOffscreen";

import styled from "styled-components";
const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SERVER = "http://localhost:3500/user";

function RegisterForm({ continueRegister }) {
  const userRef = useRef(); //

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Get api -> if user name exists -> show error alerts
      const { data } = await axios.get(SERVER);
      const foundUser = data.find((person) => person.user === user);

      if (!foundUser) {
        await axios.post(SERVER, JSON.stringify({ user, pwd }), {
          headers: { "Content-Type": "application/json" },
        });

        continueRegister();
        setUser("");
        setPwd("");
        setMatchPwd("");
      } else {
        setErrMsg("Username Taken");
      }
    } catch (err) {
      setErrMsg("Registration Failed");
    }
  };

  return (
    <>
      <SectionContainer>
        {errMsg ? <ErrMsg>{errMsg}</ErrMsg> : <OffScreen />}
        <h1 style={{ textAlign: "center" }}>Welcome to DEV Community</h1>
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            {!validName || !user ? (
              <FontAwesomeIcon icon={faTimes} style={{ display: "none" }} />
            ) : (
              <ShowMarks icon={faCheck} style={{ color: "limegreen" }} />
            )}
          </label>
          <InputField
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off" // dont wanna see the previous values suggested.
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          {userFocus && !user && !validName ? (
            <Instructions>
              <FontAwesomeIcon icon={faInfoCircle} />
              <br />
              &nbsp; - 4 to 24 characters.
              <br />
              &nbsp; - Must begin with a letter.
              <br />
              &nbsp; - Letters, numbers, underscores, hyphens allowed.
            </Instructions>
          ) : (
            <OffScreen />
          )}

          <label htmlFor="password">
            Password:
            {validPwd ? (
              <FontAwesomeIcon icon={faCheck} style={{ color: "limegreen" }} />
            ) : (
              <FontAwesomeIcon icon={faCheck} style={{ display: "none" }} />
            )}
            {validPwd || !pwd ? (
              <FontAwesomeIcon icon={faTimes} style={{ display: "none" }} />
            ) : (
              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
            )}
          </label>

          <InputField
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          {pwdFocus && !validPwd ? (
            <Instructions>
              <FontAwesomeIcon icon={faInfoCircle} /> &nbsp;
              <br /> &nbsp; - 8 to 24 characters.
              <br /> &nbsp; - Must include uppercase and lowercase letters, a
              number and a special character.
              <br /> &nbsp; - Allowed special characters: ! @ # $ %
            </Instructions>
          ) : (
            <OffScreen />
          )}

          <label htmlFor="confirm_pwd">
            Confirm Password:
            {validMatch && matchPwd ? (
              <FontAwesomeIcon icon={faCheck} style={{ color: "limegreen" }} />
            ) : (
              <FontAwesomeIcon icon={faCheck} style={{ display: "none" }} />
            )}
            {validMatch || !matchPwd ? (
              <FontAwesomeIcon icon={faTimes} style={{ display: "none" }} />
            ) : (
              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
            )}
          </label>
          <InputField
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          {matchFocus && !validMatch ? (
            <Instructions>
              {" "}
              <FontAwesomeIcon icon={faInfoCircle} /> &nbsp; Must match the
              first password input field.
            </Instructions>
          ) : (
            <OffScreen />
          )}
          {!validName || !validPwd || !validMatch ? (
            <Button disabled>Sign Up</Button>
          ) : (
            <Button> Sign Up</Button>
          )}
        </FormContainer>

        <StyledLink to="/login" element={<Login />}>
          <span>Already have an account?</span> &nbsp;
          <span style={{ color: "#4646c7" }}>Log in</span>
        </StyledLink>
      </SectionContainer>
    </>
  );
}

export default RegisterForm;
