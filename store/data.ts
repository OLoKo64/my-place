import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ProjectsData, TimelineData, fetchTimelineData, fetchProjectsData } from '@/utils'

export const state = () => ({
  timeline: [] as TimelineData[],
  projects: [] as ProjectsData[]
})

export type DataModuleState = ReturnType<typeof state>

export const getters: GetterTree<DataModuleState, DataModuleState> = {
  getTimeline: state => state.timeline,
  getProjects: state => state.projects
}

export const mutations: MutationTree<DataModuleState> = {
  setTimelineData (state, timeline: TimelineData[]) {
    state.timeline = timeline
  },
  setProjectsData (state, projects: ProjectsData[]) {
    state.projects = projects
  }
}

export const actions: ActionTree<DataModuleState, DataModuleState> = {
  async fetchTimelineDataStore ({ commit }) {
    const timelineData: TimelineData[] = await fetchTimelineData()
    commit('setTimelineData', timelineData)
  },
  async fetchProjectsDataStore ({ commit }) {
    const projectsData: ProjectsData[] = await fetchProjectsData()
    commit('setProjectsData', projectsData)
  }
}
