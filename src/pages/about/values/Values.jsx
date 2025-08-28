import React from "react";
import "./values.scss";
import { Text } from "@/components/texts";
import values from "@/assets/images/img03.jpg";

const Values = () => {
    return (
        <section className="values">
            <Text className="values__title" variant="h3">Valores</Text>
            <div>
                <img className="values__image" src={values} alt="Imagen de los valores de la empresa"/>
                <Text className="values__description" variant="p">
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

export default Values;