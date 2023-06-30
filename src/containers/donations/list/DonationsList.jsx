import TransactionCard from "@components/cards/transaction";
import Button from "@ui/button";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

const DonationsList = ({ className, space, donations }) => {
    const [hasMore, setHasMore] = useState(false);

    return (
        <div
            className={clsx(
                "rn-product-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row mb--50 align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h3>Recent Impacts</h3>
                    </div>
                </div>

                {donations?.length > 0 ? (
                    <div className="row g-5">
                        {donations?.map((donation) => (
                            <div className="col-4 col-lg-12 col-md-12 col-sm-12 col-12">
                                <TransactionCard data={donation} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No donations to display.</p>
                )}
                {/* <Pagination
                    pagination={donations?.meta}
                    currentPage={donations?.meta?.currentPage}
                    rootPage="/donations"
                /> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="view-more-btn mt--50">
                            <Button
                                color="primary-alta"
                                className={!hasMore ? "disabled" : ""}
                                fullwidth
                            // onClick={loadMoreHandler}
                            >
                                {hasMore ? (
                                    <>View More Items</>
                                ) : (
                                    <>No More Items</>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationsList.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    donation: PropTypes.array,
};

DonationsList.defaultProps = {
    space: 1,
};

export default DonationsList;
