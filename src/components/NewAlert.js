import React from "react";
import { PropTypes } from "prop-types";
import classNames from "classnames";
import Button from '@ux/button';
import { ALERT_EMPHASES, ALERT_ICONS, ALERT_NEW_BG, DISMISS } from "../AlertSettings";
import '@ux/button/styles';

function NewAlert(props) {

    const { bg, body, border, borderLeft, coloredIcon, ctaAux, ctaMain, emphasis, header, isDismissable, lockup
    } = props;

    return (
        <div className={classNames("Alert-New", "bg-"+bg, emphasis, { border: border, "border-left": borderLeft })}>
            <div className={classNames("Alert--content", "txt-"+lockup)}>
                <div className="Alert--icon-and-text-wrapper">
                    <div className={classNames("Alert--icon", coloredIcon && emphasis)}>
                        {ALERT_ICONS[emphasis]}
                    </div>
                    <div className="text-lockup">
                        {header && <div className="Alert--header">
                            <h3 className={classNames({ "mb-s": body })}>{header}</h3>
                        </div>}
                        {body && <div className="Alert--body">
                            <p>{body}</p>
                        </div>}
                    </div>
                </div>
                {(ctaMain || ctaAux) && <div className="Alert--actions">
                    {ctaMain && <Button design="secondary" size="small" text={ctaMain} />}
                    {ctaAux && <Button design="tertiary" size="small" text={ctaAux} />}
                </div>}
            </div>
            {isDismissable && <button className="button-dismiss">{DISMISS}</button>}
        </div >
    );
}

NewAlert.defaultProps = {
    bg: "default",
    body: "Body",
    border: false,
    borderLeft: true,
    ctaAux: "Auxiliary Action",
    ctaMain: "Main Action",
    emphasis: "info",
    header: "Header",
    iconColor: true,
    isDismissable: true,
}

NewAlert.propTypes = {
    bg: PropTypes.oneOf(ALERT_NEW_BG),
    body: PropTypes.string,
    border: PropTypes.bool,
    borderLeft: PropTypes.bool,
    ctaAux: PropTypes.string,
    ctaMain: PropTypes.string,
    emphasis: PropTypes.oneOf(ALERT_EMPHASES),
    header: PropTypes.string,
    iconColor: PropTypes.bool,
    isDismissable: PropTypes.bool,
}

export default NewAlert;