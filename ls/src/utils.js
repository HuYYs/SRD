export const isSome = (data, id, hoverStatus, childStatus) => {
    if (data.id === id) {
        data.isHover = hoverStatus
        data.isChildHover = childStatus
        return data;
    }
    if (!data.children) return data
    for (let i = 0; i < data.children.length; i++) {
        isSome(data.children[i], id, hoverStatus, childStatus)
    }
}