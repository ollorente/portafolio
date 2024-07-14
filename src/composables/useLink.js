import { Link, RefLink } from "@/interfaces/Link.js"
import { HTTP } from "@/utils/fakeDB.js"
import paginator from "@/utils/paginator.js"

const MODEL = "links"

export default () => {
  const GetAllLinks = async (id, options) => {
    const P = paginator(options.limit, options.page)

    const items = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .filter(e => e.postId === id)
          .sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
              return 1
            }
            if (a.createdAt < b.createdAt) {
              return -1
            }
            return 0
          })
          .splice(P.page, P.limit)
          .map((e) => RefLink(e))
      })

    return await items
  }

  const GetOneLink = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .find((e) => e.id === id)
      })

    return Link(item)
  }

  return {
    GetAllLinks,
    GetOneLink,
  }
}