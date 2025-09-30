import "../styles/contact-card.css";

import type { IconProps } from "phosphor-react";

interface ContactCardProps {
  Icon: React.FC<IconProps>;
  contactMethod: string;
  contactMethodInfo: string;
  buttonText: string;
  href: string;
}

function ContactCard({
  Icon,
  contactMethod,
  contactMethodInfo,
  buttonText,
  href,
}: ContactCardProps) {
  return (
    <div className="contact-card-container">
      {<Icon size={50} color="#042f62" weight="regular" />}
      <div className="contact-card-texts">
        <h3>{contactMethod}</h3>
        <p>{contactMethodInfo}</p>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    </div>
  );
}

export default ContactCard;
