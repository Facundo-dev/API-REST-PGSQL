
import Task from '../models/Tasks';


export async function createTask(req, res) {
    const { name, done, projectId } = req.body;
    const newTask = await Task.create({
        name,
        done,
        projectid

    }, {
        fields: ['name', 'done', 'projectid']
    });
    res.json({ message: 'New Task Created' });
}

export function getTasks(req, res) {

}

export function updateTask(req, res) {

}

export function deleteTask(req, res) {

}

export function getOneTask(req, res) {

}

export function getTasksByProject(req, res) {

}