export const Post = (db) => {
  return {
    id: db.id,
    author: db.author,
    date: db.date,
    dateGMT: db.dateGMT,
    content: db.content,
    title: db.title,
    excerpt: db.excerpt,
    status: db.status,
    commentStatus: db.commentStatus,
    pingStatus: db.pingStatus,
    password: db.password,
    name: db.name,
    toPing: db.toPing,
    pinged: db.pinged,
    modified: db.modified,
    modifiedGMT: db.modifiedGMT,
    contentFiltered: db.contentFiltered,
    parent: db.parent,
    guid: db.guid,
    order: db.order,
    type: db.type,
    mimeType: db.mimeType,
    commentsCount: db.commentsCount,
    createdAt: db.createdAt,
    updatedAt: db.updatedAt,
  }
}

export const RefPost = (db) => {
  return {
    id: db.id,
    title: db.title,
    excerpt: db.excerpt,
    type: db.type,
    mimeType: db.mimeType,
    createdAt: db.createdAt,
  }
}