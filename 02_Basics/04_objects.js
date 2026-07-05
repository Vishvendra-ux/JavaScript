const tinderUser = {}

tinderUser.name = "John Doe"
tinderUser.age = 25
tinderUser.isLoggedIn = true

// console.log(tinderUser) // { name: 'John Doe', age: 25, isLoggedIn: true }

const regularUser = {
    email: "john@example.com",
    fullName: {
      userFullName: {
        firstName: "John",
        lastName: "Doe"
      }
    }
}
// console.log(regularUser.fullName.userFullName.firstName) // John
// console.log(regularUser.fullName.userFullName.firstName) // John

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3={obj1,obj2}
// const obj3 = Object.assign({}, {obj1, obj2})
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const user = [
  {
    id: 1,
    email: "vishvendra@example.com"
  },
  {

  }
]
// user[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'name', 'age', 'isLoggedIn' ] makes an array of keys of the object
// console.log(Object.values(tinderUser)); // [ 'John Doe', 25, true ] makes an array of values of the object

// console.log(Object.entries(tinderUser)); // [ [ 'name', 'John Doe' ], [ 'age', 25 ], [ 'isLoggedIn', true ] ] makes an array of key-value pairs of the object 

// console.log(tinderUser.hasOwnProperty("name")); // true checks if the object has the property "name"

const course = {
    courseName: "JavaScript",
    price: "299",
    courseInstructor: "Vishvendra Pratap Singh"
}
//course.courseInstructor = "Vishvendra P Singh" // updating the courseInstructor property
// console.log(course.courseInstructor); // Vishvendra P Singh

const {courseInstructor : instructor} = course // destructuring the course object and renaming the courseInstructor property to instructor
console.log(instructor); // Vishvendra Pratap Singh

// const navBar = ({company}) => {

// }
// navBar({company: "Vishvendra"}) // passing an object with a company property to the navBar function

// {
//   "name" : "Vishvendra",
//   "course" : "JavaScript",
//   "price" : "299"
// } 