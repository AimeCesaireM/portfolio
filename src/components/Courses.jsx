/**
 * Terminal-style courses section.
 * © 2025 Aime Cesaire Mugishawayo — Apache-2.0
 */

import TerminalSection from "./TerminalSection"

const courses = [
  {
    name: "Algorithms",
    link: "https://www.amherst.edu/academiclife/departments/courses/2223F/COSC/COSC-311-2223F",
    inProgress: false,
  },
  {
    name: "Data Structures",
    link: "https://www.amherst.edu/academiclife/departments/courses/2122F/COSC/COSC-211-2122F",
    inProgress: false,
  },
  {
    name: "Natural Language Processing",
    link: "https://www.amherst.edu/academiclife/departments/courses/2425S/COSC/COSC-243-2425S",
    inProgress: true,
  },
  {
    name: "Computer Security",
    link: "https://www.amherst.edu/academiclife/departments/courses/2223F/COSC/COSC-383-2223F",
    inProgress: false,
  },
  {
    name: "Abstract Algebra",
    link: "https://www.amherst.edu/academiclife/departments/courses/2324F/MATH/MATH-350-2324F",
    inProgress: false,
  },
  {
    name: "Machine Learning",
    link: "https://www.amherst.edu/academiclife/departments/courses/2223S/COSC/COSC-247-2223S",
    inProgress: false,
  },
  {
    name: "Computer Systems",
    link: "https://www.amherst.edu/academiclife/departments/courses/2122S/COSC/COSC-171-2122S",
    inProgress: false,
  },
  {
    name: "Computer Networks",
    link: "https://www.amherst.edu/academiclife/departments/courses/2324F/COSC/COSC-283-2324F",
    inProgress: false,
  },
  {
    name: "Artificial Intelligence",
    link: "https://www.amherst.edu/academiclife/departments/courses/2324F/COSC/COSC-241-2324F",
    inProgress: false,
  },
  {
    name: "Number Theory",
    link: "https://www.amherst.edu/academiclife/departments/courses/2223S/MATH/MATH-250-2223S",
    inProgress: false,
  },
  {
    name: "Cryptography",
    link: "https://www.amherst.edu/academiclife/departments/courses/2223S/MATH/MATH-252-2223S",
    inProgress: false,
  },
  {
    name: "Nonlinear Optimization",
    link: "https://www.amherst.edu/academiclife/departments/courses/2425S/MATH/MATH-294-2425S",
    inProgress: true,
  },
  {
    name: "Data Mining",
    link: "https://www.amherst.edu/academiclife/departments/courses/2425S/COSC/COSC-254-2425S",
    inProgress: true,
  },
  {
    name: "IBM Data Science Professional Certificate",
    link: "https://www.coursera.org/professional-certificates/ibm-data-science#courses",
    inProgress: true,
  },
  {
    name: "AWS DevOps Specialization",
    link: "https://www.coursera.org/specializations/aws-devops",
    inProgress: true,
  },
]

const Courses = () => {
  return (
    <TerminalSection
      id="courses"
      command="courses --recent"
      lines={[
        { text: "# current + past courseware", accent: true },
        ...courses.map(({ name, link, inProgress }) => ({
          text: `${inProgress ? "[in-progress]" : "[completed ]"} ${name}`,
          href: link,
        })),
        { text: "# next up: `certifications --show`", accent: true },
      ]}
    />
  )
}

export default Courses
