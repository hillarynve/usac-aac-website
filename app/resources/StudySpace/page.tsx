import Link from "next/link";
import Box from "./components/box";
import "./style.css";
import StudyHedrick from "./img/StudyHedrick.png";
import Bplate from "./img/Bplate.jpg";
import StarbucksWestwood from "./img/StarbucksWestwood.jpg";
import YRL from "./img/YRL.jpg";
import Kerckhoff from "./img/Kerckhoff.png";
import BTC from "./img/BTC.jpg";
import NorthernLights from "./img/NorthernLights.png";
import Anderson from "./img/Anderson.jpg";
import Upsidedown from "./img/upsidedown.jpg";

export default function StudySpace() {
  return (
    <section>
      <div>
        <h1 className="study-header"> Where Can I Study?</h1>

        <div className="study-grid">
          <Box label="The Study at Hedrick" src={StudyHedrick} />
          <Box label="Bruin Plate" src={Bplate} />
          <Box label="Starbucks Westwood" src={StarbucksWestwood} />
          <Box label="Research Library" src={YRL} />
          <Box label="Kerckhoff Hall" src={Kerckhoff} />
          <Box label="Bruin Transfer Center" src={BTC} />
          <Box label="Northern Lights Cafe" src={NorthernLights} />
          <Box label="Anderson School of Management" src={Anderson} />
          <Box label="Upside Down Cafe" src={Upsidedown} />
        </div>

        <Link href="/" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
