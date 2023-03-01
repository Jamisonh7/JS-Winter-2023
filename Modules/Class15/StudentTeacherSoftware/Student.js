/* 
Student properties : (Global variables)
id
name
age
courseName
balance

Student Actions: (Functions)
enroll
showMyDetails
*/



class Student {

    
//Global Variable



/*
1) What is the purpose of the function?
    -enroll
2) Do I need any input from user?
    -yes
    -name, age, coursename
3) Should the function return any value back to user ?
    -No

*/
static courseData = [
    {
        cName: 'Web Development',
        cPrice: 4000
    },
    {
        cName: 'SDET Course',
        cPrice: 4000
    },
    {   cName: 'Backend Development',
        cPrice: 3000
    },
    {
        cName: 'FrontEnd Development',
        cPrice: 2000
    },
    {   cName: 'Manual QA',
        cPrice: 1000

    }

]

static studentIdCounter = 0;

studentInfo = {
    sId: 0,
    sName: 'Default Name',
    sAge: 0,
    sCourseName: 'Default Course',
    sBalance: 0,
    sGrade: '-'
}




enroll(name,age,courseName) {
    if (age < 16) {
        console.log('Sorry: We only enroll who are 16 or above');
    } else if (!this.isCourseValid(courseName)) {
        console.log(`We dont have any course for ${courseName}`);
    } else {
        this.studentInfo.sName = name;
        this.studentInfo.sAge = age;
        const courseObject = this.isCourseValid(courseName);
        this.studentInfo.sCourseName = courseObject.cName;
        this.studentInfo.sBalance = courseObject.cPrice;
        Student.studentIdCounter++;
        this.studentInfo.sId = Student.studentIdCounter;
        console.log(`Congratulations for thr enrollment in ${courseObject.cName} course`);
        console.log(`Your student id: Coming Soon`);
    }

}


showMyDetails() {
    console.log(`\nID: ${this.studentInfo.sId}`);
    console.log(`\nName: ${this.studentInfo.sName}`);
    console.log(`\nCourse Name: ${this.studentInfo.sCourseName}`);
    console.log(`\nBalance: ${this.studentInfo.sBalance}`);
    console.log(`\nLast Grade Received: ${this.studentInfo.sGrade}`);

}


isCourseValid(courseName) {
    let courseObject = null;

    for (const cObject of Student.courseData) {
        if(cObject.cName.toLowerCase().localeCompare(courseName.toLowerCase()) === 0) {
            courseObject = cObject;
            break;
        }
    }
    return courseObject;
}

static msgFromClass2023(msg) {
    console.log(`Msg from Class 2023 ${msg}`);
}




changeName(newName) {
    if(newName.localeCompare(this.studentInfo.sName) === 0) {
        console.log(`Name cannot be updated; as you have same name already stored in the system.`);
    } else {
        this.studentInfo.sName = newName;
        console.log(`Your name in the system is updated to ${newName}`);
    }
}


changeCourse(newCourse) {
    if(!this.isCourseValid(newCourse)) {
        console.log(`Institute does not provide any course on ${newCourse}`);
    } else if (this.studentInfo.sCourseName.toLowerCase().localeCompare(newCourse.toLowerCase()) === 0) {
        console.log(`You are already enrolled in the ${this.studentInfo.sCourseName} course`);
    } else {
      const courseObject = this.isCourseValid(newCourse);
      this.studentInfo.sCourseName = courseObject.cName;
      this.studentInfo.sBalance = courseObject.cPrice;
      console.log(`\nYour course in the system is updated to ${this.studentInfo.sCourseName}`);
      console.log(`\nYour updated balance is ${this.studentInfo.sBalance}`);
    }
}


makePayment(amount) {
    if(amount <= 0) {
        console.log(`\nPlease provide a valid amount for payment`);
    } else if (amount > this.studentInfo.sBalance) {
        console.log(`\nYou cannot pay more than balance amount ${this.studentInfo.sBalance}`);
    } else {
        this.studentInfo.sBalance = this.studentInfo.sBalance - amount;
        console.log(`\nThank You for the payment. Your updated balance is ${this.studentInfo.sBalance}`);
    }
}





}
module.exports = Student;