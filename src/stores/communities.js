import { writable, derived } from 'svelte/store'

export const communities = writable([])

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

export const projectTags = derived(communities, $communities => {
  let tags = {}

  for (let community of $communities) {
    if (community.projects) {
      for (let [id, project] of Object.entries(community.projects)) {
        if (project.tags) {
          let tagsArr = []
          for (let tag of project.tags) {
            tagsArr.push(tag)
          }
          tags[id] = tagsArr
        }
      }
    }
  }
  return tags
})

export const communityTags = derived(communities, $communities => {
  let communityTags = {}

  for (let community of $communities) {
    if (community.projects) {
      let tagsSet = new Set()
      for (let project of Object.values(community.projects)) {
        if (project.tags) {
          for (let tag of project.tags) {
            tagsSet.add(tag)
          }
        }
      }
      communityTags[community.id] = Array.from(tagsSet)
    }
  }
  return communityTags
})
