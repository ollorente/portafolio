import { Post, RefPost } from "@/interfaces/Post.js"
import { HTTP } from "@/utils/fakeDB.js"
import paginator from "@/utils/paginator.js"

const MODEL = "posts"

export default () => {
  const GetAllPosts = async (options) => {
    const P = paginator(options.limit, options.page)

    const items = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .filter(e => e.status === "public")
          .sort(function (a, b) {
            if (a.order < b.order) {
              return 1
            }
            if (a.order > b.order) {
              return -1
            }
            return 0
          })
          .splice(P.page, P.limit)
          .map((e) => RefPost(e))
      })

    return await items
  }

  const GetOnePost = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .find((e) => e.id === id)
      })

    return Post(item)
  }

  const SearchOnePost = async (data) => {
    const item = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .find((e) => e.type === data)
      })

    return item ? Post(item) : null
  }

  const SearchAllPosts = async (data, options) => {
    const P = paginator(options.limit, options.page)

    const items = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .filter(e => e.status === "public")
          .filter(e => e.type === data)
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
          .map((e) => RefPost(e))
      })

    return await items
  }

  return {
    GetAllPosts,
    GetOnePost,
    SearchAllPosts,
    SearchOnePost,
  }
}