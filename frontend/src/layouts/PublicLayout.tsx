
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md w-full">
                <Outlet />
            </div>
            <footer className="mt-8 text-center text-sm text-gray-400">
                <p>Powered by <span className="font-semibold text-gray-600">GoBix</span></p>
            </footer>
        </div>
    );
};

export default PublicLayout;
