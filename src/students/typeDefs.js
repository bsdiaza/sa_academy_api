export const studentsTypeDef = `
type Student {
    code: Int!
    username: String!
    password: Int!
}
input StudentInput {
    username: String!
    password: Int!
}`;

export const studentsQueries = `
    allStudents: [Student]!
    studentByCode(code: Int!): Student!
`;

export const studentsMutations = `
    createStudent(student: StudentInput!): Student!
    deleteStudent(code: Int!): Int
    updateStudent(code: Int!, student: StudentInput!): Student!
    loginStudent(student: StudentInput!): String!
`;
