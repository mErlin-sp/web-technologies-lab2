$(document).ready(function () {
    console.log('ready')

})

function validateForm(data) {
    let fail = false

    const nameRegEx = /^\w{1,6}\s\w[.]\w[.]$/g
    if (!nameRegEx.test(data.name.value)) {
        $('#name').css('border', '1px solid red')
        fail = true
    }else{
        $('#name').css('border', '1px solid #ccc')
    }

    const groupRegEx = /^[a-zA-Z][a-zA-Z][-]\d\d$/g;
    if (!groupRegEx.test(data.group.value)) {
        $('#group').css('border', '1px solid red')
        fail = true
    }else{
        $('#group').css('border', '1px solid #ccc')
    }

    const phoneRegEx = /^[(]\d{3}[)][-]\d{3}[-]\d{2}[-]\d{2}$/g;
    if (!phoneRegEx.test(data.tel.value)) {
        $('#tel').css('border', '1px solid red')
        fail = true
    }else{
        $('#tel').css('border', '1px solid #ccc')
    }

    const idRegEx = /^[a-zA-Z]{2}\s[№]\d{6}$/g;
    if (!idRegEx.test(data.id.value)) {
        $('#id').css('border', '1px solid red')
        fail = true
    }else{
        $('#id').css('border', '1px solid #ccc')
    }

    const facultyRegEx = /^[a-zA-Z]{4}$/g;
    if (!facultyRegEx.test(data.faculty.value)) {
        $('#faculty').css('border', '1px solid red')
        fail = true
    }else{
        $('#faculty').css('border', '1px solid #ccc')
    }

    return !fail;
}
