import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Location from './components/Location';
import Infrastructure from './components/Infrastructure';
import MasterPlan from './components/MasterPlan';
import PlotOptions from './components/PlotOptions';
import Industries from './components/Industries';
import Invest from './components/Invest';
import Compliance from './components/Compliance';
import Gallery from './components/Gallery';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Location />
                <Infrastructure />
                <MasterPlan />
                <PlotOptions />
                <Industries />
                <Invest />
                <Compliance />
                <Gallery />
                <EnquiryForm />
            </main>
            <Footer />
        </div>
    );
}
