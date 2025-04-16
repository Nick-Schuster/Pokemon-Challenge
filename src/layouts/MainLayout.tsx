import React, { ReactNode } from 'react';


const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-blue-500 text-white p-4">
                <h1 className="text-xl font-bold text-white">HEADER</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-4">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-blue-500 text-white p-4">
                <p>&copy; FOOTER</p>
            </footer>
        </div>
    );
};

export default MainLayout;
