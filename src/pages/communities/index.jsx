import SEO from "@components/seo";
import ProductArea from "@containers/explore-product/layout-01/community";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { getCommunities } from "@redux/slices/community";

// Demo Data
import { wrapper } from "@redux/store";

export default function Product({ communities }) {
    console.log("communities", communities);
    return (
        <Wrapper>
            <SEO pageTitle="Communities" />
            <Header />
            <main id="main-content">
                <ProductArea communities={communities} />
            </main>
            <Footer />
        </Wrapper>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getCommunities());
        const serializedCommunities = store.getState().community.communities;
        const serializedError = store.getState().community.error;
        return {
            props: {
                communities: serializedCommunities,
                error: serializedError,
            },
        };
    }
);
