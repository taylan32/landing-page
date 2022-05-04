import React from "react";
import { Person, School } from "../data/informations.js";

export default function PersonelInfo() {
    return (
        <section id="personel_info">
            <img src={require("../images/image.jpg")} alt="Taylan Alparslan" title="Taylan Alparslan" />
            <div className="text-center">
                <h2 className="heading-large">
                    <span className="text-capitalize">{Person.firstName}</span>
                    <span> </span>
                    <span className="text-uppercase">{Person.lastName}</span>
                </h2>
                <p className="heading-medium text-capitalize">
                    <span> {School.universityName} | {School.department} </span>
                </p>
            </div>
            <a href="#projects" className="btn btn-primary">Projelere Git</a>
        </section>
    );
}
