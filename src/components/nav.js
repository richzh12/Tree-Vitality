import Link from 'next/link';
import styles from './nav.module.css';

const nav = () => {
    return (
        <div className={`${styles.nav} fixed top-0 left-0 w-full z-50 bg-white shadow-md`}>
            <nav className="max-w-6xl mx-auto px-4 py-2">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-gray-800 hover:text-blue-600">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/reporte-page" className="text-gray-800 hover:text-blue-600">Reportar</Link>
                    </li>
                    <li>
                        <Link href="/actividades-page" className="text-gray-800 hover:text-blue-600">Actividades</Link>
                    </li>
                    <li>
                        <Link href="/contactenos-page" className="text-gray-800 hover:text-blue-600">Contáctenos</Link>
                    </li>
                    <li>
                        <Link href="/auth-page/login" className="text-gray-800 hover:text-blue-600">Iniciar Sesion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default nav;