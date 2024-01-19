const validation = (fieldName, value,) => {
    const regexName = /^[a-zA-Z\s]+$/;
    const regexLastName = /^[a-zA-Z\s-]+$/;
    const regexDescripcion = /^.{1,750}$/;
    const regexDob = /^\d{4}-\d{2}-\d{2}$/;
    const errors = {};

    switch (fieldName) {
        case 'name':
            return regexName.test(value) ? '' : 'El nombre del driver no puede contener caracteres especiales';
        case 'lastName':
            return regexLastName.test(value) ? '' : 'El apellido del driver no puede contener caracteres especiales';
        case 'description':
            return regexDescripcion.test(value) ? '' : 'La descripción debe tener menos de 750 caracteres';
        case 'dob':
            return regexDob.test(value) ? '' : 'Inserta una fecha válida, por ejemplo: YYYY-MM-DD';
        case 'teamIds':
            return value.length > 0 ? '' : 'Debe seleccionar al menos un equipo';
        default:
            return '';
    }
};

export default validation;