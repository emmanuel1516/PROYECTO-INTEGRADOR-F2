import React from "react";
import "./vision.scss";
import { Text } from "@/components/texts";
import vision from "@/assets/images/img01.jpg";

const Vision = () => {
    return (
        <section className="vision">
            <Text className="vision__title" variant="h3">Visión</Text>
            <div>
                <img className="vision__image" src={vision} alt="Imagen de la visión de la empresa"/>
                <Text className="vision__description" variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    Cumque odit modi natus fuga autem qui, iure aspernatur vel repellendus itaque totam ut minus praesentium?
                    Illum iusto tenetur reprehenderit laborum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    Cumque odit modi natus fuga autem qui, iure aspernatur vel repellendus itaque totam ut minus praesentium?
                    Illum iusto tenetur reprehenderit laborum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing
                    Cumque odit modi natus fuga autem qui, iure aspernatur vel repellendus itaque totam ut minus praesentium?
                    Illum iusto tenetur reprehenderit laborum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit
                </Text>
            </div>
        </section>
    );
};

export default Vision;