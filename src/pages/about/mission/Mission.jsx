import React from "react";
import "./mission.scss";
import { Text } from "@/components/texts";
import mission from "@/assets/images/img02.jpg";

const Mission = () => {
    return (
        <section className="mission">
            <Text className="mission__title" variant="h3">Misión</Text>
            <div>
                <img className="mission__image" src={mission} alt="Imagen de la misión de la empresa"/>
                <Text className="mission__description" variant="p">
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

export default Mission;