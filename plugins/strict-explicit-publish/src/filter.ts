import type { QuartzFilterPlugin } from "@quartz-community/types"

export const StrictExplicitPublish: QuartzFilterPlugin = () => ({
  name: "StrictExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const frontmatter = vfile.data?.frontmatter as Record<string, unknown> | undefined
    return frontmatter?.publish === true
  },
})
