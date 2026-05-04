import { create } from 'zustand'
import { createFilterSlice } from './filterSlice'
import type { FilterSlice } from './filterSlice/types'
import { devtools } from 'zustand/middleware'

export const useGlobalStore = create<FilterSlice>()(devtools((...args) => ({
  ...createFilterSlice(...args),
})))