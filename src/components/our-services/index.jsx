import clsx from "clsx";
import PropTypes from "prop-types";
// import Button from "@ui/button";
import { SectionTitleType, TextType } from "@utils/types";

const OurServices = ({ space, className }) => (
    <div
        className={clsx(
            "rn-about-Quote-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
        id="our-services"
    >
        <div className="container">
            <div className="row mb--40">
                <div className="title-area text-center">
                    <h3 className="title mb--15">Our Services</h3>
                    <p className="subtitle">
                        Here’s how Rahat can help aid agencies deploy CVA.
                    </p>
                </div>
            </div>

            <div className="row g-5 justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="work-card">
                        <img
                            src="https://assets.rumsan.com/rumsan-group/managed-service-rahat.jpg"
                            alt="image"
                        />

                        <div className="content">
                            <span>
                                <h3
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                    }}
                                >
                                    Managed Service
                                </h3>
                            </span>

                            <p
                                style={{
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                }}
                            >
                                An out of box product - Rahat will manage the
                                infrastructure and ensure it is operational and
                                available throughout the duration of your
                                project.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="work-card">
                        <img
                            src="https://assets.rumsan.com/rumsan-group/white-lable-rahat.jpg"
                            alt="image"
                        />
                        <div className="content">
                            <span>
                                <h3
                                    className="title"
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                    }}
                                >
                                    Customization and White Label
                                </h3>
                            </span>

                            <p
                                className="title"
                                style={{
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                }}
                            >
                                White-labeled and customized - custom branding,
                                design, data management, beneficiary data import
                                and management.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                    <div className="work-card">
                        <img
                            src="https://assets.rumsan.com/rumsan-group/pilots-trunkey-rahat.jpg"
                            alt="image"
                        />
                        <div className="content">
                            <span>
                                <h3
                                    className="title"
                                    style={{
                                        color: "white",
                                        fontWeight: "400",
                                    }}
                                >
                                    Pilots and Turnkey Projects
                                </h3>
                            </span>

                            <p
                                style={{
                                    color: "white",
                                    fontSize: "14px",
                                    fontWeight: "300",
                                }}
                            >
                                We are looking for partners to run large-scale
                                pilots! Contact us to discuss how we can partner
                                together to validate challenges in large-scale
                                market pilots.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-cta-box-short spacing">
                    <h3>Let's Chat</h3>

                    <a
                        href="/contact-form"
                        className="btn btn-medium btn-primary"
                    >
                        Schedule a Demo
                    </a>
                </div>
            </div>
        </div>
    </div>
);

OurServices.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

OurServices.defaultProps = {
    space: 1,
};

export default OurServices;

