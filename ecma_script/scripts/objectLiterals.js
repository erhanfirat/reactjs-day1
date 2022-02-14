

// OBJECT LITERALS
const objectLiterals = () => {

    const backgroundProp = "background"; // [background, backgroundColor, backgroundImage]
    const backgroundValue = "#f1f1f1";

    const elemStyle = {
        color: "#333333",
        "width": "100%",
        [backgroundProp]: backgroundValue,
        generateStyling: () => {
            return "generated stylings";
        },
        toString() {
            return "converted to string";
        }
    }
    // const prop1 = "width";

    // elemStyle.width
    // elemStyle["width"]
    // elemStyle[prop1]

    // elemStyle["height"]
    // elemStyle.height = 123;

    // debugger;

    // elemStyle.background
    // elemStyle["background"]
    // elemStyle[backgroundProp]


    // console.log("elemStyle['color'] > ", elemStyle["color"]);
    // console.log("elemStyle['backgroundProp'] > ", elemStyle[backgroundProp]);
    // console.log("elemStyle['color'] > ", elemStyle[backgroundProp]);
    // console.log("elemStyle['toString'](); > ", elemStyle["toString"]());

    // elemStyle["toString"]();



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
    const classroomBranches = ["A", "B", "C"]

    // console.log("classrooms > ", classrooms);
    // debugger;

    classroomBranches.forEach(classroomBranche => classrooms[classroomBranche] = []);
    console.log("classrooms > ", classrooms);
    //debugger;

    students.forEach(student => classrooms[student.classroom].push(student));
    console.log("classrooms > ", classrooms);

    // Ayla (s3) nın sınıfındaki tüm öğrenciler
    // console.log(classrooms[s3.classroom]);

}

// objectLiterals();
