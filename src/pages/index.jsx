import AboutUs from "@components/about-us";
import Benefits from "@components/benefits";
import Milestones from "@components/milestones";
import OurPlatform from "@components/our-platform";
import SEO from "@components/seo";
import WeAre from "@components/we-are";
import HeroArea from "@containers/hero";
import Footer from "@layout/footer";
import Header from "@layout/header";
import { normalizedData } from "@utils/methods";
import Wrapper from "src/layout/wrapper";

// Demo data
import homepageData from "../data/home.json";
import VideoArea from "@components/youtube-video";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Home = () => {
    const content = normalizedData(homepageData?.content || []);

    return (
        <Wrapper>
            <SEO pageTitle="Home" />
            <Header />
            <main id="main-content">
                <HeroArea data={content["hero-section"]} />
            </main>
            <AboutUs />
            <WeAre />
            <Milestones />
            <VideoArea data={content["video-section"]} />
            <Benefits />
            <OurPlatform />
            <Footer />
        </Wrapper>
    );
};

export default Home;

