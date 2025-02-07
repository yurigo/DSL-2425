import { Router } from 'express';

export const routerClasses = Router();

import { students } from './students.js';

// Crea una API que devuelva un JSON con:

// un array con los nombres y apellidos de todos los alumnos inscritos en DSL.
// número total de alumnos inscritos en DSL.


routerClasses.get('/', function (req, res) {
    // const nameArray = [];

    // for (let i = 0; i < a.length ; i++){
    //     console.log(a[i]);
    //     nameArray.push(a[i].name + " " + a[i].lastname);
    // }

    

    // const sortedStudents = students.sort(function(a,b){
    //     return b.id - a.id
    // });


    // const nameArray = sortedStudents.map(function(elem){
    //     return elem.name + " " + elem.lastname
    // })

    
    // const sortedStudents = students.sort((a,b) => a.id - b.id);
    // const nameArray = sortedStudents.map(elem => elem.name + " " + elem.lastname)
    
    const nameArray = students
        .toSorted((a,b) => a.id - b.id)
        .map(elem => elem.name + " " + elem.lastname)

    res.status(200).json({
        data: nameArray,
        total: nameArray.length
    })
})
