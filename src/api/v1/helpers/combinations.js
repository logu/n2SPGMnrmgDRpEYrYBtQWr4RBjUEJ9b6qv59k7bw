export default {
    findPaths(tree) {
        const result = []
        // Recursive  function
        const climb = (node, pathMap) => {
            // The tree is empty
            if (!node) {
                return
            }
            // pushing the top level of branch
            pathMap.push(node.x)
            //  check if it is the end of branch
            if (!node.l && !node.r) {
                // picked values from branch is stored
                result.push(pathMap.join('.'))
            } else {
                // climb the left branch
                climb(node.l, pathMap)
                // climb the right branch
                climb(node.r, pathMap)
            }
            // remove last value
            pathMap.pop()
        }
        // first climb
        climb(tree, []);
        return result;
    }
}