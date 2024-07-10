import { HTTP } from "@/utils/fakeDB.js"
import { MediaFile, RefMediaFile } from "@/interfaces/MediaFile.js"

const MODEL = "mediaFiles"

export default () => {
  const GetAllMediaFiles = async (id, options) => {
    const { limit = 10, page = 0 } = options

    const items = await HTTP()
      .then(async (response) => {
        return await response[MODEL]
          .filter(e => e.isLock === false)
          .filter(e => e.isActive === true)
          .filter(e => e.grafId === id)
          .sort(function (a, b) {
            if (a.createdAt > b.createdAt) {
              return 1
            }
            if (a.createdAt < b.createdAt) {
              return -1
            }
            return 0
          })
          .splice(page, limit)
          .map(e => RefMediaFile(e))
      })

    return items
  }

  const GetOneMediaFile = async (id) => {
    const item = await HTTP()
      .then(async (response) => {
        const item = await response[MODEL].find((e) => e.id === id)
        return MediaFile(item)
      })

    return item
  }

  return {
    GetAllMediaFiles,
    GetOneMediaFile,
  }
}