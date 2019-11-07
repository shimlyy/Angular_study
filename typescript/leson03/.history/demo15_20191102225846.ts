//展开

// let first = [1,2];
// let second = [3,4];
// let bothPlus = [0, ...first, ...second, 5];
// console.log(bothPlus)

let info = {
    name: "Jimmy",
    age:10
};

let extInfo = {
    gender: 'male',
    height: '180'
};

let student = {
    ...info,
    ...extInfo
};

console.log(student)