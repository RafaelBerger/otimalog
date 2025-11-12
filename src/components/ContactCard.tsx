import "../styles/contact-card.css";

import type { IconProps } from "phosphor-react";

interface ContactCardProps {
  Icon: React.FC<IconProps>;
  contactMethod: string;
  contactMethodInfo: string;
  href: string;
}

function ContactCard({
  Icon,
  contactMethod,
  contactMethodInfo,
  href,
}: ContactCardProps) {
  return (
    <a
      href={href}
      className="contact_card_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contact-card-container">
        {<Icon size={60} color="#ffffff" weight="regular" />}
        <div className="contact-card-texts">
          <h3>{contactMethod}</h3>
          <p>{contactMethodInfo}</p>
        </div>
      </div>
    </a>
  );
}

export default ContactCard;
