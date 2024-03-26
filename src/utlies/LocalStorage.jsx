export const saveToLocalStorage = (name, data) => {
    const saveData = JSON.parse(localStorage.getItem(`${name}`) || [])

    const existedData = saveData.find(item => item.id === data.id)
    if(!existedData){
        saveData.push(data)
        localStorage.setItem(`${name}`, JSON.stringify(saveData))
    }else{
        return
    }
}

export const getDataFromLocalStorage = (name, data) => {
    const saveData = JSON.parse(localStorage.getItem(`${name}`) || [])
    return saveData.find(item => item.id === data.id)
}