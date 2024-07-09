export const MediaFile = (db) => {
  return {
    id: db.id,
    url: db.url,
    providerPublicId: db.providerPublicId,
    userId: db.userId,
    isActive: db.isActive,
    isLock: db.isLock,
    createdAt: db.createdAt,
    updatedAt: db.updatedAt
  }
}

export const RefMediaFile = (db) => {
  return {
    id: db.id,
    url: db.url,
    isActive: db.isActive,
    createdAt: db.createdAt
  }
}