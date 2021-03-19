// For creating blog

const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const data = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: "data",
      value: data,
    });
  }
};
