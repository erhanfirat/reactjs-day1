// DESCTRUCTURING

const desttucturing = () => {
    class Student {
        id = "";
        name = "";
        grade = 0;
        classroom = "";

        constructor(id, name, grade, classroom) {
            this.id = id;
            this.name = name;
            this.grade = grade;
            this.classroom = classroom;
        }
    }

    const s1 = new Student("123", "Ahmet", 99, "A");
    const s2 = new Student("625", "Murat", 78, "B");
    const s3 = new Student("711", "Ayla", 89, "A");
    const s4 = new Student("154", "Zehra", 100, "B");

    const students = [s1, s2, s3, s4];
    const classrooms = {};
    const classroomBranches = ["A", "B", "C", "D", "E", "F"]


    // usage in objects
    // --------------------------

    // const id = s1.id;
    // const name = s1.name;
    // const rest = {
    //     grade: s1.grade,
    //     classroom: s1.classroom
    // };

    // const { id, name, ...rest } = s1;

    // console.log("id ", id);
    // console.log("name ", name);
    // console.log("rest ", rest);



    // function argumants
    // ---------------------------


    // const logUserName = ({ name }) => {
    //     console.log("user name > ", name);
    //     // console.log("user unusedProps > ", unusedProps);
    // }

    // logUserName(s2);


    // arrays
    // ---------------------------

    // const [firstBranch, secondBranch, ...others, lastBranch] = classroomBranches;
    // console.log("firstBranch > ", firstBranch);
    // console.log("secondBranch > ", secondBranch);
    // console.log("lastBranch > ", lastBranch);


    // clone object or array
    // ---------------------------

    // const s5 = s4;
    // console.log("s5 > ", s5);
    // console.log("s4 > ", s4);

    // s5.id = "159";
    // console.log("s5 > ", s5);
    // console.log("s4 > ", s4);

    // const s5 = { ...s4 };
    // console.log("s5 > ", s5);
    // console.log("s4 > ", s4);

    // s5.id = "159";
    // console.log("s5 > ", s5);
    // console.log("s4 > ", s4);

}


//desttucturing();