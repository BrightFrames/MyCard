
import { Outlet } from 'react-router-dom';

import { ModeToggle } from "@/components/mode-toggle";

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 relative">
            <div className="absolute top-4 right-4">
                <ModeToggle />
            </div>
            <div className="w-full max-w-md w-full">
                <Outlet />
            </div>
            <footer className="mt-8 text-center text-sm text-gray-400 dark:text-slate-500">
                <p>Powered by <span className="font-semibold text-gray-600 dark:text-slate-400">MyCard</span></p>
            </footer>
        </div>
    );
};

export default PublicLayout;
