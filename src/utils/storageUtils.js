// 读取local 的数据

export function saveTask(value) {
    localStorage.setItem('task_id',JSON.stringify(value))
}

export function readTask() {
    return JSON.parse(localStorage.getItem('task_id') || '[]')
}