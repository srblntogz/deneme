import Link from "next/link";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Navbar() {
    return (
        <ul className="nav p-2 shadow-sm bg-light">
            <li className="nav-item flex-grow-1">
                <Link href="/" className="nav-link" aria-current="page" >Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link href="/Link1" className="nav-link" aria-current="page" >Link1</Link>
            </li>
            <li className="nav-item">
                <Link href="/Link2" className="nav-link" aria-current="page" >Link2</Link>
            </li>
            <li className="nav-item">
                <Link href="/Link3" className="nav-link" aria-current="page" >Link3</Link>
            </li>
        </ul>
    )
}