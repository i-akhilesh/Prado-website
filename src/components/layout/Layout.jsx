import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AchievementPopup from '../ui/AchievementPopup';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <AchievementPopup />
            <main className="flex-grow pt-[88px]">
                {/* The pt-[88px] aligns with the navbar height to prevent content jump */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
