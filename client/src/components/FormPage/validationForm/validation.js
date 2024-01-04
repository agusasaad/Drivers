const validation = (driverData) => {
    const errors = {};
    const regexName = /^[a-zA-Z\s]+$/;
    const regexLastName = /^[a-zA-Z\s-]+$/;
    const regexNationality = /^[a-zA-Z]+$/;
    const regexDescripcion = /^.{1,750}$/;
    const regexDob = /^\d{4}-\d{2}-\d{2}$/;

    if (!regexName.test(driverData.name)) {
        errors.name = 'El nombre del driver que deseas crear no puede contener caracteres especiales';
    }

    if (!regexLastName.test(driverData.lastName)) {
        errors.lastName = 'El apellido del driver que deseas crear no puede contener caracteres especiales';
    }

    if (!regexDescripcion.test(driverData.description)) {
        errors.description = 'La descripcion deberia tener menos de 750 caracteres';
    }

    if (!regexNationality.test(driverData.nationality)) {
        errors.nationality = 'No puede contener caracteres especiales';
    }

    if (!regexDob.test(driverData.dob)) {
        errors.dob = 'Inserte una fecha valida, por Ejemplo: YYYY-MM-DD';
    }

    return errors;
}

export default validation;