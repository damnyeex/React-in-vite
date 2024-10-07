import TextInfo from "./TextInfo";
import { textinfo } from "../data";
function TextInfoSection() {
  return (
    <section>
      <h3>Test</h3>
      <ul>
        {textinfo.map((info) => (
          <TextInfo key={info.tittle} {...info} />
        ))}
      </ul>
    </section>
  );
}

export default TextInfoSection;
