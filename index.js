// let employees = [
//     ["moe", "sizlak", "barkeep", 2],
//     ["bartholomew", "simpson", "scamp", 3]
// ]

// let employeeRecords = createEmployeeRecords(employees)

function createEmployeeRecord(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employeeRowData){
    return employeeRowData.map(row => createEmployeeRecord(row))
}


function createTimeInEvent(dateStamp){
    const [date, hour] = dateStamp.split(' ')

    const inEvent = {
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    }

    this.timeInEvents.push(inEvent)

    return this
}

function createTimeOutEvent(dateStamp){
    const [date, hour] = dateStamp.split(' ')

    const outEvent = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    }

    this.timeOutEvents.push(outEvent)

    return this
}


  
