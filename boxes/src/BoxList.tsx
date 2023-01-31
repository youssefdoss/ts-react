import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { IBox } from "./interfaces";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

function BoxList() {
  const [boxes, setBoxes] = useState<IBox[]>([]);

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: IBox): void {
    setBoxes((boxes: IBox[]) => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string): void {
    setBoxes((boxes: IBox[]) => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
