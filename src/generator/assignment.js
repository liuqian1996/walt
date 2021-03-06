import mapSyntax from "./map-syntax";
import { setInScope } from "./utils";
import mergeBlock from "./merge-block";

const generateAssignment = node => {
  const subParent = { postfix: [] };
  const block = node.params
    .slice(1)
    .map(mapSyntax(subParent))
    .reduce(mergeBlock, []);

  block.push(setInScope(node.params[0]));

  return subParent.postfix.reduce(mergeBlock, block);
};

export default generateAssignment;
