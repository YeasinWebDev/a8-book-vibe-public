export const saveToLocalStorage = (name, data) => {
    let saveData = JSON.parse(localStorage.getItem(`${name}`) || "[]");
    const existedData = saveData.find(item => item.id === data.id);
    if (!existedData) {
        saveData.push(data);
        localStorage.setItem(`${name}`, JSON.stringify(saveData));
    }
}


export const getDataFromLocalStorage = (name) => {
    if (name === 'read') {
        return JSON.parse(localStorage.getItem(`read`) || "[]");
    } else {
        return JSON.parse(localStorage.getItem(`wish`) || "[]");
    }
}


export const deleteFromLocalStorage = (name, id) => {
    let saveData = JSON.parse(localStorage.getItem(`${name}`) || "[]");
    saveData = saveData.filter(item => item.id!== id);
    localStorage.setItem(`${name}`, JSON.stringify(saveData));
}