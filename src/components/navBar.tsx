import Link from "next/link"
import { usePathname } from "next/navigation";

export default function NavBar() {
    let pathname = usePathname() || '/';

    return (
        <header className="bg-green-800 text-primary-foreground py-4 px-6 shadow-md">
            <div className="flex items-center justify-between">
                <Link 
                    href="/" 
                    className="text-xl font-bold" 
                    prefetch={false}
                >
                    Family Traditions
                </Link>
                <nav className="flex items-center gap-6">
                <Link 
                    href="/home" 
                    className="text-sm font-medium hover:underline focus:underline" 
                    prefetch={false}
                >
                    Home
                </Link>
                <Link 
                    href="/books" 
                    className="text-sm font-medium hover:underline focus:underline" 
                    prefetch={false}
                >
                    Books
                </Link>
                <Link 
                    href="/users" 
                    className="text-sm font-medium hover:underline focus:underline" prefetch={false}
                >
                    Account
                </Link>
                </nav>
            </div>
        </header>
    )
}