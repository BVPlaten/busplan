import Link from "next/link";


export default function Navigation() {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nac-item">
          <Link href="/" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24" style={{ marginRight: '5px' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
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
        <li className="nac-item">
          <Link href="/Labor" className="nav-link">
            Labor
          </Link>
        </li>
      </ul>
    </div>
  );
}
