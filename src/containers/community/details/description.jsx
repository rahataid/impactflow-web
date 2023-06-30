/* eslint-disable @next/next/no-img-element */
const EditProfileImage = ({ community, id }) => {
    return (
        <>
            <div id={id} className="login-area message-area">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12">
                            <div className="rn-address mt--15">
                                <div className="inner">
                                    <div>
                                        {/* <p style={{ padding: "1rem 0" }}>
                                            Managed By:{" "}
                                            {community.managers.join(",")}
                                        </p> */}
                                        {/* {community.tags?.map((tag) => (
                                            <div
                                                className="pill mb--15 mr--5"
                                                key={tag.id}
                                                type="button"
                                            >
                                                {tag.name}
                                            </div>
                                        ))} */}
                                    </div>
                                    <p>{community?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfileImage;
