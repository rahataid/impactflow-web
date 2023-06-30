import clsx from "clsx";

const AboutUs = ({ space, className }) => (
    <div
        className={clsx(
            "rn-about-Quote-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container d-flex justify-content-center">
            <div className="row g-5 d-flex align-items-center">
                <div className="col-lg-5">
                    <div className="rn-about-title-wrapper">
                        <img
                            src="https://assets.rumsan.com/esatya/rahat-homepage.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div>
                        <img
                            src="https://assets.rumsan.com/rumsan-group/rahat-new-logo-color.png"
                            alt=""
                            style={{ width: "256px", marginLeft: "-24px" }}
                        />
                        <h2 style={{ fontSize: "35px", fontWeight: "300" }}>
                            An open-source blockchain-based{" "}
                            <span style={{ color: "#007bb6" }}>
                                {" "}
                                Cash and Voucher Assistance{" "}
                            </span>{" "}
                            platform to support vulnerable communities.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {
    space: 1,
};

export default AboutUs;
