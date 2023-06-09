import Breadcrumb from "@components/breadcrumb";
import SEO from "@components/seo";
import ConnectArea from "@containers/connect";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const Connect = () => (
    <Wrapper>
        <SEO pageTitle="Connect" />
        <Header />
        <main id="main-content">
            <Breadcrumb
                pageTitle="Make your payment easier"
                currentPage="Make your payment easier"
            />
            <ConnectArea />
        </main>
        <Footer />
    </Wrapper>
);

export default Connect;
