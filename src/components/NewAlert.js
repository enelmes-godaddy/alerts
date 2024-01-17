import React from "react";
import classNames from "classnames";
import Button from '@ux/button';
import { ALERT_ICONS, DISMISS } from "../AlertSettings";
import '@ux/button/styles';

function NewAlert(props) {

    const { alertWidth, alertWidthAuto, body, cta, ctaWrap, emphasis, header, isDismissable } = props;

    const alertWidthValue = alertWidthAuto ? "auto" : alertWidth + "px";

    return (
        <div
            // style={{ width: alertWidth + "px" }}
            style={{ width: alertWidthValue }}
            className={classNames("NewAlert", emphasis)}
        >
            <div className="Alert--content">
                <div className="Alert--icon-and-text-wrapper">
                    <div className="Alert--icon">
                        {ALERT_ICONS[emphasis]}
                    </div>
                    <div className="Alert--text-lockup">
                        {header && <div className="Alert--header">
                            <h3 className="ux-text ux-text-size1 mb-s">{header}</h3>
                        </div>}
                        {body && <div className="Alert--body">
                            <p className="ux-text ux-text-paragraph ux-text-size0">{body}</p>
                        </div>}
                    </div>
                </div>
                {cta && <div className={classNames("Alert--action", { "wrap-cta-label": ctaWrap })}>
                    <Button design="secondary" size="small" text={cta} />
                </div>}
            </div>
            {isDismissable && <button className="Alert--dismiss">{DISMISS}</button>}
        </div >
    );
}

export default NewAlert;