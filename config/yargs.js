const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')
    .command('listar', 'Muestra tareas', {
        completado: {
            alias: 'c',
            default: ''
        }
    })
    .command('crear', 'Crear un elemento por hacaer', {
        descripcion

    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea', {
        descripcion

    })
    .help().argv;
module.exports = {
    argv
}