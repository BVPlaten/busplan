import Link from "next/link";


export default function Navigation() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nac-item">
          <Link href="/" className="nav-link">
            Startseite
          </Link>
        </li>
        <li className="nac-item">
          <Link href="/Schedule" className="nav-link">
            Anzeige Busfahrplan
          </Link>
        </li>
        <li className="nac-item">
          <Link href="/Filter" className="nav-link">
            Routen nach Zeit
          </Link>
        </li>
        <li className="nac-item">
          <Link href="/StopDetails" className="nav-link">
            Details Haltestelle
          </Link>
        </li>
      </ul>
    </div>
  );
}
