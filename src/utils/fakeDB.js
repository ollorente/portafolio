export const HTTP = async () => {
  return await fetch("/portafolio/data.json")
    .then(res => res.json())
}
