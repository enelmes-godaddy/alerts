import React, { useEffect, useState } from "react";
import Button from "@ux/button";
import "@ux/button/styles";
import { ALERT_EMPHASES } from "./AlertSettings";
import NewAlert from "./components/NewAlert";
import "./App.scss";


function App() {
  const defaultAlertWidth = "";
  const defaultAlertWidthAuto = true;
  const defaultCtaWrap = false;
  const defaultIsDismissable = true;
  const defaultShowCta = true;
  const defaultShowHeader = true;
  const defaultTxtBody = "You will be logged out in 12 hours for security purposes. Log in again to re-authenticate for 7 days.";
  const defaultTxtHeader = "Re-authentication needed";
  const defaultTxtCta = "Re-Authenticate Now";

  const [alertWidth, setAlertWidth] = useState(defaultAlertWidth);
  const [alertWidthAuto, setAlertWidthAuto] = useState(defaultAlertWidthAuto);
  const [ctaWrap, setCtaWrap] = useState(defaultCtaWrap);
  const [isDismissable, setIsDismissable] = useState(defaultIsDismissable);
  const [showCta, setShowCta] = useState(true);
  const [showHeader, setShowHeader] = useState(true);
  const [txtCta, setTxtCta] = useState(defaultTxtCta);
  const [txtBody, setTxtBody] = useState(defaultTxtBody);
  const [txtHeader, setTxtHeader] = useState(defaultTxtHeader);
  const [changesMade, setChangesMade] = useState(false);
    
  useEffect(() => {
    setChangesMade(
      alertWidth !== defaultAlertWidth ||
      alertWidthAuto !== defaultAlertWidthAuto ||
      ctaWrap !== defaultCtaWrap ||
      isDismissable !== defaultIsDismissable ||
      showCta !== defaultShowCta ||
      showHeader !== defaultShowHeader ||
      txtBody !== defaultTxtBody ||
      txtCta !== defaultTxtCta ||
      txtHeader !== defaultTxtHeader
    );
  }, [alertWidth, alertWidthAuto, ctaWrap, isDismissable, showCta, showHeader, txtBody, txtCta, txtHeader, defaultAlertWidth, defaultAlertWidthAuto, defaultCtaWrap, defaultIsDismissable, defaultShowCta, defaultShowHeader, defaultTxtBody, defaultTxtCta, defaultTxtHeader]);
  
  function handleReset() {
    setAlertWidth(defaultAlertWidth);
    setAlertWidthAuto(defaultAlertWidthAuto);
    setCtaWrap(defaultCtaWrap);
    setIsDismissable(defaultIsDismissable);
    setShowCta(defaultShowCta);
    setShowHeader(defaultShowHeader);
    setTxtBody(defaultTxtBody);
    setTxtCta(defaultTxtCta);
    setTxtHeader(defaultTxtHeader);
    setChangesMade(false);
  }

  return (
    <div className="App">
      <div className="section settings">
        <h1>Settings</h1>
        <div className="settings--actions">     
          <Button
            design="inline"
            size="small"
            text="Reset All"
            onClick={handleReset}
            disabled={!changesMade}
          />
        </div>
        <div className="settings--block">
          <form>
            <div className="form-wrapper mb-s">
              <input
                type="checkbox"
                id="enable-header-text"
                checked={showHeader}
                onChange={event => {
                  setShowHeader(!showHeader);
                }}
              />
              <label className="label" htmlFor="enable-header-text">
                Header Text
              </label>
            </div>
            <input
              disabled={!showHeader}
              id="header-text"
              onChange={e => {
                setTxtHeader(e.target.value);
              }}
              placeholder="Header"
              value={txtHeader}
            />
          </form>
        </div>
        <div className="settings--block">
          <form>
            <label className="label mb-s" htmlFor="body-text">
              Body Text
            </label>
            <textarea
              id="body-text"
              onChange={e => {
                setTxtBody(e.target.value);
              }}
              placeholder="Body"
              rows={8}
              value={txtBody}
            />
          </form>
        </div>
        <div className="settings--block">
          <form>
            <div className="form-wrapper mb-s">
              <input
                checked={showCta}
                id="enable-cta-label"
                type="checkbox"
                onChange={event => {
                  setShowCta(!showCta);
                }}
              />
              <label className="label" htmlFor="enable-cta-label">
                CTA Label
              </label>
            </div>
            <input
              disabled={!showCta}
              id="cta-label"
              onChange={e => {
                setTxtCta(e.target.value)
              }}
              placeholder="CTA"
              value={txtCta}
            />
            <div className="form-wrapper ml-m mt-s">
              <input
                type="checkbox"
                id="cta-wrap"
                checked={ctaWrap}
                disabled={!showCta}
                onChange={event => {
                  setCtaWrap(event.target.checked)
                }}
              />
              <label htmlFor="cta-wrap">
                Wrap CTA label
              </label>
            </div>
          </form>
        </div>
        <div className="settings--block">
          <p className="label mb-s">Dismiss</p>
          <form>
            <input
              checked={isDismissable}
              id="make-dismissable"
              onChange={event => {
                setIsDismissable(event.target.checked)
              }}
              type="checkbox"
            />
            <label htmlFor="make-dismissable">
              Show Dismiss button
            </label>
          </form>
        </div>
        <div className="settings--block">
          <p className="label mb-s">Width</p>
          <form>
            <div className="form-wrapper mt-s mb-s">
              <input
                type="checkbox"
                id="alert-width-auto"
                checked={alertWidthAuto}
                onChange={event => {
                  setAlertWidthAuto(event.target.checked);
                  if (!alertWidthAuto) {
                    setAlertWidthAuto(true);
                  }
                }}
              />
              <label htmlFor="alert-width-auto">
                Auto
              </label>
            </div>
            <div className="form-wrapper">
              <input
                disabled={alertWidthAuto}
                id="alert-width"
                onChange={e => {
                  setAlertWidth(e.target.value)
                }}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                placeholder="e.g., 640"
                type="number"
                value={alertWidth}
              />
              <div className="ml-s">px</div>
            </div>
          </form>
        </div>
      </div>
      <div className="section examples">
        <h1>Examples</h1>
        {ALERT_EMPHASES.map(option => (
          <NewAlert
            alertWidth={alertWidth}
            alertWidthAuto={alertWidthAuto}
            body={txtBody}
            cta={showCta && txtCta}
            ctaWrap={ctaWrap}
            emphasis={option}
            header={showHeader && txtHeader}
            isDismissable={isDismissable}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
