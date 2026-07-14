// src/filter.ts
var StrictExplicitPublish = () => ({
  name: "StrictExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const frontmatter = vfile.data?.frontmatter;
    return frontmatter?.publish === true;
  }
});

export { StrictExplicitPublish };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map