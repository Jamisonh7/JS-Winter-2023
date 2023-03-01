const Student = require("./Student");

class Teacher {

    static courseData = [
        {
            cName: 'Web Development',
            cSalary: 15000
        },
        {
            cName: 'SDET Course',
            cSalary: 14000
        },
        {   cName: 'Backend Development',
            cSalary: 13000
        },
        {
            cName: 'FrontEnd Development',
            cSalary: 12000
        },
        {   cName: 'Manual QA',
            cSalary: 10000
    
        }
    
    ]

    static teacherIdCounter = 0;

    constructor(name,age,courseName) {
        if (age < 21) {
            console.log('Sorry: We only hire hire teachers 21 or above');
            throw 'Invalid Teacher Age';
        } else if (!this.isCourseValid(courseName)) {
            console.log(`We dont have any course for ${courseName}`);
            throw 'Invalid course name by the teacher-candidate'
        } else {
            this.teacherInfo.tName = name;
            this.teacherInfo.tAge = age;
            const courseObject = this.isCourseValid(courseName);
            this.teacherInfo.tCourseName = courseObject.cName;
            this.teacherInfo.tSalary = courseObject.cSalary;
            Teacher.teacherIdCounter++;
            this.teacherInfo.tId = Teacher.teacherIdCounter;
            console.log(`Congratulations to be part of the institute for ${courseObject.cName} course`);
            console.log(`Your teacher id: ${this.teacherInfo.tId}`);
        }
    
    }

    teacherInfo = {
        tId: 0,
        tName: 'Default Name',
        tAge: 0,
        tCourseName: 'Default Course Name',
        tSalary: 0
    }

    isCourseValid(courseName) {
        let courseObject = null;
    
        for (const cObject of Teacher.courseData) {
            if(cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0) {
                courseObject = cObject;
                break;
            }
        }
        return courseObject;
    }

    showMyDetails() {
        console.log(`\nTeacher Info:`);
        console.log(`\nId: ${this.teacherInfo.tId}`);
        console.log(`\nName: ${this.teacherInfo.tName}`);
        console.log(`\nCourse Name: ${this.teacherInfo.tCourseName}`);
        console.log(`\nSalary: ${this.teacherInfo.tSalary}`);
    }

    changeName(newName) {
        if(newName.localeCompare(this.teacherInfo.tName) === 0) {
            console.log(`Name cannot be updated; as you have same name already stored in the system.`);
        } else {
            this.teacherInfo.tName = newName;
            console.log(`Your name in the system is updated to ${newName}`);
        }
    }

    gradeStudent(studentId,studentGrade) {
       const studentInfoObject = Student.findStudentInfoObjectById(studentId);
       if (!studentInfoObject) {
        console.log(`\nIncorrect student-id ${studentId} provided`);
       } else if (studentInfoObject.sGrade.localeCompare('-') !== 0) {
            console.log(`\nStudent with id ${studentId} is already graded; to update student-grade pls use updateGrade-method`);
    } else {
        studentInfoObject.sGrade = studentGrade;
        console.log(`Thank you for grading student with id = ${studentId}`);
    }
}

updateGrade(studentId,updateGrade) {
    const studentInfoObject = Student.findStudentInfoObjectById(studentId);
    if (!studentInfoObject) {
        console.log(`\nIncorrect student-id ${studentId} provided`);
    } else if (studentInfoObject.sGrade.localeCompare('-') ===0) {
        console.log(`Student is not graded; to provide student-grade pls use gradeStudent-method`);
    } else if (studentInfoObject.sGrade.localeCompare(updateGrade) === 0) {
        console.log(`Student has the same grade`);
    } else {
        studentInfoObject.sGrade = updateGrade;
        console.log(`Thank you for updating grade of student with id ${studentId}`);
    }
}
    

}
module.exports = Teacher;