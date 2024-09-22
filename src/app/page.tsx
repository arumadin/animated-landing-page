import Hero from "./components/Hero";
import FeatureSlides from "./components/FeatureSlides"
import './styles/home.scss'

export default function Home() {
 
  return (
    <div>
      <Hero />
      <FeatureSlides />
      <div className="footer">Build your ideal story today</div>
    </div>
  );
}
