import { Graf, RefGraf } from "@/interfaces/Graf.js"
import { HTTP } from "@/utils/fakeDB.js"
import paginator from "@/utils/paginator.js"

const MODEL = "grafs"

export default () => {
  const GetAllGrafs = async (options) => {
    const P = paginator(options.limit, options.page)

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
          .splice(P.page, P.limit)
          .map((e) => RefGraf(e))
      })

    return await items
  }

  const GetOneGraf = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .find((e) => e.id === id)
      })

    return Graf(item)
  }

  const SearchAllGrafs = async (data, options) => {
    const P = paginator(options.limit, options.page)

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
          .splice(P.page, P.limit)
          .map((e) => RefGraf(e))
      })

    return await items
  }

  return {
    GetAllGrafs,
    GetOneGraf,
    SearchAllGrafs,
  }
}