import Product from "@components/product/layout-01/community";
import { ProductType, SectionTitleType } from "@utils/types";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "FILTER_TOGGLE":
            return { ...state, filterToggle: !state.filterToggle };
        case "SET_INPUTS":
            return { ...state, inputs: { ...state.inputs, ...action.payload } };
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

const ExploreProductArea = ({ className, space, communities, data }) => {
    return (
        <div className={clsx("rn-product-area mt--50", className)}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h3>Communities</h3>
                    </div>
                </div>
                <div className="row g-5">
                    {communities?.length > 0 ? (
                        <>
                            {communities.map((community) => (
                                <div
                                    key={community.id}
                                    className="col-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <Product
                                        overlay
                                        title={community.title}
                                        location={community.location}
                                        description={community.description}
                                        establishedDate={
                                            community.establishedDate
                                        }
                                        id={community.id}
                                    />
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>No item to show</p>
                    )}
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    communities: PropTypes.array,
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
