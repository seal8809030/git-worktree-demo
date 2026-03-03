import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <FAQ />
                <CallToAction />
            </main>
            <Footer />
            <CookieBanner />
        </div>
    );
}

export default App;
