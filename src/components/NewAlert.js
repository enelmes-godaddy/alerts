import React from "react";
import classNames from "classnames";
import Button from '@ux/button';
import Text from '@ux/text';
import { ALERT_ICONS, DISMISS } from "../AlertSettings";
import '@ux/button/styles';

function NewAlert(props) {

    const { alertWidth, alertWidthAuto, body, cta, ctaWrap, emphasis, header, isDismissable } = props;

    const alertWidthValue = alertWidthAuto ? "auto" : alertWidth + "px";

    return (
        <div
            style={{ width: alertWidthValue }}
            className={classNames("NewAlert", emphasis)}
        >
            <div className="Alert--content">
                <div className="Alert--icon">
                    {ALERT_ICONS[emphasis]}
                </div>
                <div className="Alert--text-and-cta-wrapper">
                    <div className="Alert--text">
                        {header && <div className="Alert--header">
                            <Text.H3 as="title" size={-2} text={header} />
                        </div>}
                        {body && <div className="Alert--body">
                            <Text.P as="paragraph" size={-1} text={body} />
                        </div>}
                    </div>
                {cta && <div className={classNames("Alert--cta", { "wrap-cta-label": ctaWrap })}>
                    <Button design="secondary" size="small" text={cta} />
                </div>}
                </div>
            </div>
            {isDismissable && <div className="Alert--dismiss">
                <Button design="inline" size="small" icon={DISMISS} />
            </div>}
        </div >
    );
}

export default NewAlert;