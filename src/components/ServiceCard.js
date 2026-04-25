import Link from 'next/link';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link href={link} className="service-link">
          Learn More &rarr;
        </Link>
      )}
    </div>
  );
}
