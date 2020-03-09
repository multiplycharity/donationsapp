import { writable, derived } from 'svelte/store'

export const communities = writable([])

export const tags = derived(communities, $communities => {
  let tagsSet = new Set()

  for (let community of $communities) {
    if (community.projects) {
      for (let project of Object.values(community.projects)) {
        if (project.tags) {
          for (let tag of project.tags) {
            tagsSet.add(tag)
          }
        }
      }
    }
  }
  return Array.from(tagsSet)
})

export const projects = derived(communities, $communities => {
  let projectsSet = new Set()

  for (let community of $communities) {
    if (community.projects) {
      for (let [id, project] of Object.entries(community.projects)) {
        projectsSet.add({ ...project, id })
      }
    }
  }
  return Array.from(projectsSet)
})
