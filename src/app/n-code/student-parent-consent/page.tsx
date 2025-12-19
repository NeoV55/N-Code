"use client";

import { PORTAL_LINKS } from "@/data/portal-links";

export const GoogleFormIframe = ({ link = PORTAL_LINKS["parentConsent"] }: { link?: string }) => {
    return (
        <div className="relative w-full h-screen min-h-screen bg-white">
            <iframe
                src={link}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                style={{ position: "absolute", top: 0, left: 0, border: 0 }}
                title="ICT AI Tutor Registration Form"
            >
                Loading…
            </iframe>
        </div>
    );
};
export default GoogleFormIframe;
