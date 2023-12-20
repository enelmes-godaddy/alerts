import React, { useEffect, useState } from "react";
import Alert from "@ux/alert";
import Button from "@ux/button";
import { ALERT_EMPHASES, ALERT_NEW_BG } from "./AlertSettings";
import NewAlert from "./components/NewAlert";
import "@ux/alert/styles";
import "@ux/button/styles";
import "@ux/icon/delete/index.css";
import '@ux/text-input/styles';
import "./App.scss";


function App() {
  const defaultBg = "none";
  const defaultBorder = true;
  const defaultBorderLeft = true;
  const defaultColoredIcon = true;
  const defaultEmphasis = "info";
  const defaultIsDismissable = true;
  const defaultTxtHeader = "Header";
  const defaultTxtBody = "Body";
  const defaultTxtCtaMain = "Main Action";
  const defaultTxtCtaAux = "Auxiliary Action";

  const sampleEmphasis = "critical";
  const sampleTxtBody = "You will be logged out in 12 hours for security purposes. Log in again to re-authenticate for 7 days.";
  const sampleTxtCtaAux = "Remind Me Later";
  const sampleTxtCtaMain = "Re-Authenticate Now"
  const sampleTxtHeader = "Re-authentication needed";
  
  const [bg, setBg] = useState(defaultBg);
  const [border, setBorder] = useState(defaultBorder);
  const [borderLeft, setBorderLeft] = useState(defaultBorderLeft);
  const [emphasis, setEmphasis] = useState(defaultEmphasis);
  const [coloredIcon, setColoredIcon] = useState(defaultColoredIcon);
  const [isDismissable, setIsDismissable] = useState(defaultIsDismissable);
  const [txtBody, setTxtBody] = useState(defaultTxtBody);
  const [txtCtaAux, setTxtCtaAux] = useState(defaultTxtCtaAux);
  const [txtCtaMain, setTxtCtaMain] = useState(defaultTxtCtaMain);
  const [txtHeader, setTxtHeader] = useState(defaultTxtHeader);
  const [changesMade, setChangesMade] = useState(false);
  const [sampleContent, setSampleContent] = useState(false);
  const [show, setShow] = React.useState(true);
    
  useEffect(() => {
    setChangesMade(
      bg !== defaultBg ||
      border !== defaultBorder ||
      borderLeft !== defaultBorderLeft ||
      coloredIcon !== defaultColoredIcon ||
      emphasis !== defaultEmphasis ||
      isDismissable !== defaultIsDismissable ||
      txtBody !== defaultTxtBody ||
      txtCtaAux !== defaultTxtCtaAux ||
      txtCtaMain !== defaultTxtCtaMain ||
      txtHeader !== defaultTxtHeader
    );
    setSampleContent(
      emphasis === sampleEmphasis &&
      txtBody === sampleTxtBody &&
      txtCtaAux === sampleTxtCtaAux &&
      txtCtaMain === sampleTxtCtaMain &&
      txtHeader === sampleTxtHeader
    )
  }, [bg, border, borderLeft, emphasis, coloredIcon, isDismissable, txtBody, txtCtaAux, txtCtaMain, txtHeader, defaultBg, defaultBorder, defaultBorderLeft, defaultColoredIcon, defaultEmphasis, defaultIsDismissable, defaultTxtBody, defaultTxtCtaAux, defaultTxtCtaMain, defaultTxtHeader, sampleEmphasis, sampleTxtBody, sampleTxtCtaAux, sampleTxtCtaMain, sampleTxtHeader]);
  
  function handleReset() {
    setBg(defaultBg);
    setBorder(defaultBorder);
    setBorderLeft(defaultBorderLeft);
    setEmphasis(defaultEmphasis);
    setColoredIcon(defaultColoredIcon);
    setIsDismissable(defaultIsDismissable);
    setTxtBody(defaultTxtBody);
    setTxtCtaAux(defaultTxtCtaAux);
    setTxtCtaMain(defaultTxtCtaMain);
    setTxtHeader(defaultTxtHeader);
    setChangesMade(false);
  }

  function handleSampleContent() {
    setEmphasis(sampleEmphasis);
    setTxtBody(sampleTxtBody);
    setTxtCtaAux(sampleTxtCtaAux);
    setTxtCtaMain(sampleTxtCtaMain);
    setTxtHeader(sampleTxtHeader);
    setSampleContent(true);
  }

  const currentAlertActions = (
    <>
      {txtCtaMain && <Button design="inline" text={txtCtaMain} />}
      {txtCtaAux && <Button design="inline" text={txtCtaAux} />}
    </>
  );

  return (
    <div className="App">
      <div className="section setup">
        <div className="section--header">
          <h1>Setup</h1>
          <div className="header-actions">            
            <Button
              design="secondary"
              size="small"
              text="Reset All"
              onClick={handleReset}
              disabled={!changesMade}
            />
            <Button
              design="secondary"
              size="small"
              text="Use Sample Content"
              onClick={handleSampleContent}
              disabled={sampleContent}
            />
          </div>
        </div>
        <div className="section--main">
          <div className="subsection">
            <h2>Shared</h2>
            <div className="wrapper">
              <div>
                <div className="setup--block">
                  <p className="label">Emphasis</p>
                  <form>
                    {ALERT_EMPHASES.map(option => (
                      <div>
                        <input
                          type="radio"
                          name="emphasis"
                          id={option}
                          value={option}
                          checked={option === emphasis}
                          onChange={event => {
                            setEmphasis(event.target.value);
                          }}
                        />
                        <label htmlFor={option}>
                          {option}
                        </label>
                      </div>
                    ))}
                  </form>
                </div>
                <div className="setup--block">
                  <p className="label">Dismissable</p>
                  <form>
                    <input
                      type="checkbox"
                      id="make-dismissable"
                      checked={isDismissable}
                      onChange={event => {
                        setIsDismissable(event.target.checked)
                      }}
                    />
                    <label htmlFor="make-dismissable">
                      Dismissable
                    </label>
                  </form>
                </div>
              </div>
              <div>
                <div className="setup--block">
                  <form>
                    <div className="label-wrapper">
                      <label className="label" htmlFor="header-text">
                        Header Text
                      </label>
                      <Button size="small" design="inline" text="Clear" onClick={() => setTxtHeader("")} disabled={!txtHeader} />
                    </div>
                    <input
                      value={txtHeader}
                      id="header-text"
                      onChange={e => {
                        setTxtHeader(e.target.value);
                      }}
                      placeholder={defaultTxtHeader}
                    />
                  </form>
                </div>
                <div className="setup--block">
                  <form>
                    <div className="label-wrapper">
                      <label className="label" htmlFor="body-text">
                        Body Text
                      </label>
                      <Button size="small" design="inline" text="Clear" onClick={() => setTxtBody("")} disabled={!txtBody} />
                    </div>
                    <textarea
                      value={txtBody}
                      id="body-text"
                      onChange={e => {
                        setTxtBody(e.target.value);
                      }}
                      placeholder={defaultTxtBody}
                      rows={5}
                    />
                  </form>
                </div>
                <div className="setup--block cta-block">
                  <form>
                    <div className="label-wrapper">
                      <label className="label" htmlFor="main-action-label">
                        Main Action
                      </label>
                      <Button size="small" design="inline" text="Clear" onClick={() => setTxtCtaMain("")} disabled={!txtCtaMain} />
                    </div>
                    <input
                      value={txtCtaMain}
                      id="main-action-label"
                      onChange={e => {
                        setTxtCtaMain(e.target.value)
                      }}
                      placeholder={defaultTxtCtaMain}
                    />
                  </form>
                  <form>
                    <div className="label-wrapper">
                      <label className="label" htmlFor="auxiliary-action-label">
                        Auxiliary Action
                      </label>
                      <Button size="small" design="inline" text="Clear" onClick={() => setTxtCtaAux("")} disabled={!txtCtaAux} />
                    </div>
                    <input
                      value={txtCtaAux}
                      id="auxiliary-action-label"
                      onChange={e => {
                        setTxtCtaAux(e.target.value)
                      }}
                      placeholder="Auxiliary Action"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="subsection">
            <h2>New Alert</h2>
            <div className="setup--block">
              <p className="label">Background</p>
              <form>
                {ALERT_NEW_BG.map(option => (
                  <div>
                    <input
                      type="radio"
                      name="bg"
                      id={option}
                      value={option}
                      checked={option === bg}
                      onChange={event => {
                        setBg(event.target.value);
                      }}
                    />
                    <label htmlFor={option}>
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="setup--block">
              <p className="label">Border</p>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-border"
                  checked={border}
                  onChange={event => {
                    setBorder(event.target.checked);
                  }}
                />
                <label htmlFor="new-alert-border">All-around border</label>
              </form>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-border-left"
                  checked={borderLeft}
                  onChange={event => {
                    setBorderLeft(event.target.checked);
                  }}
                />
                <label htmlFor="new-alert-border-left">Thick left border</label>
              </form>
            </div>
            <div className="setup--block">
              <p className="label">Icon</p>
              <form>
                <input
                  type="checkbox"
                  id="new-alert-colored-icon"
                  checked={coloredIcon}
                  onChange={event => {
                    setColoredIcon(event.target.checked)
                  }}
                />
                <label htmlFor="new-alert-colored-icon">
                  Colored icon
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section examples">
        <h1 className="section--header">Examples</h1>
        <div className="section--main">
          <div className="example">
            <p className="label">Current</p>
            {emphasis === "passive" || emphasis === "premium"
              ? <p className="text-passive">Variant exists in Figma but isn't supported in UXCore.</p>
              : isDismissable
                ? <Alert
                    title={txtHeader}
                    emphasis={emphasis}
                    actions={currentAlertActions}
                    onClose={() => setShow()}
                  >
                    {txtBody}
                  </Alert>
                : <Alert
                    title={txtHeader}
                    emphasis={emphasis}
                    actions={currentAlertActions}
                  >
                    {txtBody}
                  </Alert>
            }
          </div>
          <div className="example">
            <p className="label">New</p>
            {emphasis === "neutral" || emphasis === "passive"
              ? <p className="text-passive">Variant set for retirement.</p>
              : <NewAlert
                  bg={bg}
                  body={txtBody}
                  border={border}
                  borderLeft={borderLeft}
                  ctaAux={txtCtaAux}
                  ctaMain={txtCtaMain}
                  emphasis={emphasis}
                  header={txtHeader}
                  coloredIcon={coloredIcon}
                  isDismissable={isDismissable}
                />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
