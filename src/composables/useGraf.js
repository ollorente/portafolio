import { HTTP } from "@/utils/fakeDB.js"
import { Graf, RefGraf } from "@/interfaces/Graf.js"

const MODEL = "grafs"

export default () => {
  const GetAllGrafs = async (options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .filter(e => e.isLock === false)
          .filter(e => e.isActive === true)
          .sort(function (a, b) {
            if (a.createdAt < b.createdAt) {
              return 1
            }
            if (a.createdAt > b.createdAt) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => RefGraf(e))
      })

    return items
  }

  const GetOneGraf = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response[MODEL].find((e) => e.id === id)
        return Graf(item)
      })

    return item
  }

  return {
    GetAllGrafs,
    GetOneGraf,
  }
}