export const Graf = (db) => {
  return {
    id: db.id,
    text: db.text,
    userId: db.userId,
    isActive: db.isActive,
    isLock: db.isLock,
    createdAt: db.createdAt,
    updatedAt: db.updatedAt
  }
}

export const RefGraf = (db) => {
  return {
    id: db.id,
    text: db.text,
    userId: db.userId,
    isActive: db.isActive,
    createdAt: db.createdAt
  }
}