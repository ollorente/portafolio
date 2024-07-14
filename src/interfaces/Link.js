export const Link = (db) => {
  return {
    id: db.id,
    url: db.url,
    name: db.name,
    image: db.image,
    target: db.target,
    description: db.description,
    visible: db.visible,
    owner: db.owner,
    rating: db.rating,
    updated: db.updated,
    rel: db.rel,
    notes: db.notes,
    rss: db.rss,
    postId: db.postId,
    createdAt: db.createdAt,
    updatedAt: db.updatedAt,
  }
}

export const RefLink = (db) => {
  return {
    id: db.id,
    url: db.url,
    name: db.name,
    image: db.image,
    createdAt: db.createdAt,
  }
}