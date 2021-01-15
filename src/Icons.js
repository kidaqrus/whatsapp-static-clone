import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
  return (
    <div>
      <dl>
        <dt>チェック:</dt>
        <dd>
          <FontAwesomeIcon icon="check-square" />
        </dd>
        <dt>コーヒー:</dt>
        <dd>
          <FontAwesomeIcon icon="coffee" />
        </dd>
        <dt>Apple:</dt>
        <dd>
          <FontAwesomeIcon icon={["fab", "apple"]} />
        </dd>
        <dt>Microsoft:</dt>
        <dd>
          <FontAwesomeIcon icon={["fab", "microsoft"]} />
        </dd>
        <dt>Google:</dt>
        <dd>
          <FontAwesomeIcon icon={["fab", "google"]} />
        </dd>
      </dl>
    </div>
  );
};
export default Icons;
