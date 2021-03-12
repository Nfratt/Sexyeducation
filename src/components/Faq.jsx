import React from "react";

const AboutUs = () => {
    return (
        <div className="container-fluid margin-alot" id="question-accordion">
            <h2 className="text-center">FAQ</h2>
            <div className="accordion my-5">
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-patch-question "></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-one" data-toggle="collapse" data-target="#question-one"
                                    aria-expanded="true" aria-controls="question-one">
                                    Lorem ipsum dolor sit amet?
                        </h3>
                            </div>
                            <div className="collapse" id="question-one" data-parent="#question-accordion"
                                aria-labelledby="heading-one">
                                Duis accumsan neque at volutpat bibendum. Cras eget purus eu ligula volutpat bibendum. Donec
                                convallis justo ut arcu lobortis, sed commodo libero pulvinar.
                        </div>

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-patch-question "></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-two" data-toggle="collapse" data-target="#question-two"
                                    aria-expanded="true" aria-controls="question-two">
                                    Ut pharetra ipsum id enim hendrerit, at eleifend elit feugiat?
                            </h3>
                            </div>
                        </div>
                        <div className="collapse" id="question-two" data-parent="#question-accordion"
                            aria-labelledby="heading-two">
                            Maecenas bibendum turpis vehicula, sollicitudin magna ac, tristique ante. Quisque dolor
                            eros, mollis nec tincidunt id, suscipit nec quam. Vestibulum urna tellus, mattis vitae urna
                            sed, molestie tempor diam.

                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-patch-question "></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-three" data-toggle="collapse" data-target="#question-three"
                                    aria-expanded="true" aria-controls="question-three">
                                    Vestibulum convallis massa eget lacinia venenatis?
                                </h3>
                            </div>
                        </div>
                        <div className="collapse" id="question-three" data-parent="#question-accordion"
                            aria-labelledby="heading-three">
                            Quisque sed erat luctus, dapibus purus ut, imperdiet tortor. Cras sit amet ex lacinia augue
                            tincidunt dictum.
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-3">
                    <div className="col-md-8  col-lg-6">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <i className="bi bi-patch-question "></i>
                            </div>
                            <div className="col">
                                <h3 id="heading-four" data-toggle="collapse" data-target="#question-four"
                                    aria-expanded="true" aria-controls="question-four">
                                    Donec tempus sapien vel eros viverra, ac facilisis nisl hendrerit?
                        </h3>
                            </div>
                        </div>
                        <div className="collapse" id="question-four" data-parent="#question-accordion"
                            aria-labelledby="heading-four">
                            Aenean a leo tincidunt, tempor nisl ut, gravida erat. Aenean dictum posuere felis laoreet
                            aliquet. Sed placerat laoreet ullamcorper.
                        </div>
                    </div>
                </div >
            </div >
        </div >


    )
}

export default AboutUs;
