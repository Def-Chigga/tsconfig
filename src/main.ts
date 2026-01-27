export const app = 'vue'

// 允许无法访问的代码 - allowUnreachableCode
// function fn(n: number) {
//   if (n > 5) {
//     return true;
//   } else {
//     return false;
//   }
//   return true;
// }

// 允许未使用的标签 - allowUnusedLabels
// function verifyAge(age: number) {
//   // Forgot 'return' statement
//   if (age > 18) {
//     verified: true;
//   }
// }

// 精确可选属性类型 - exactOptionalPropertyTypes
// interface UserDefaults {
//   colorThemeOverride?: 'dark' | 'light'
// }
// const user: UserDefaults = {}
// user.colorThemeOverride = undefined

// Switch 中无 Fallthrough 情况 - noFallthroughCasesInSwitch
// const a: number = 6;
// switch (a) {
//   case 0:
//     console.log("even");
//   case 1:
//     console.log("odd");
//     break;
// }

// 无隐式 Any - noImplicitAny
// function fn(s) {
//   // No error?
//   console.log(s.substring(3));
// }
// fn(42);

// 无隐式覆盖 - noImplicitOverride
// class Base {
//   setup() {}
// }
// class Test extends Base {
//   // 覆盖父类方法
//   /*override*/ setup() {
//   }
// }

// 无隐式返回 - noImplicitReturns
// function test(color: 'blue' | 'black'): string {
//   if (color === 'blue') {
//     return 'blue'
//   } else {
//     ;('black')
//   }
// }

// 无隐式 this - noImplicitThis
// class Test {
//   width: number
//   height: number
//   constructor(width: number, height: number) {
//     this.width = width
//     this.height = height
//   }
//
//   test() {
//     return function () {
//       // 报错：函数中的 this 的上下文不是 Test 的实例
//       console.log(this.width, this.height)
//     }
//   }
// }

// 无索引签名的属性访问 - noPropertyAccessFromIndexSignature
// interface GameSettings {
//   speed: 'fast' | 'medium' | 'slow'
//   [key: string]: string
// }
// const settings: GameSettings = {
//   speed: 'fast',
//   username: 'john',
// }
// settings.speed
// // 报错：
// // Property username comes from an index signature, so it must be accessed with [username]
// // 属性用户名来自索引签名，因此必须用 settings.[username] 访问。
// settings.username // -> settings['username']

// 无未检查索引访问 - noUncheckedIndexedAccess
// interface EnvironmentVars {
//   NAME: string
//   [propName: string]: string
// }
// declare const env: EnvironmentVars
// const sysName = env.NAME
// // nodeEnv: string -> string | undefined
// const nodeEnv = env['NODE_ENV']

// 无未使用的本地变量 - noUnusedLocals
// function test() {
//   // 报错：
//   // defaultModelID is declared but its value is never read
//   // defaultModelID 声明了，但其值从未被读取
//   const defaultModelID = 23
// }

// 无未使用的参数 - noUnusedParameters
// function test(param: object) {
//   // 报错：
//   // 'param' is declared but its value is never read
//   // 参数 param 被声明，但其值从未被读取
// }
// // 名称以下划线（_）开头的参数声明不受未使用参数检查的影响
// function test2(_param: object) {}

// 严格绑定调用应用 - strictBindCallApply
// function fn(x: string) {
//   return parseInt(x)
// }
// const n1 = fn.call(undefined, '10')
// // 报错：
// // Argument of type 'boolean' is not assignable to parameter of type 'string'
// // 类型为“布尔值”的参数无法分配给类型为“字符串”的参数
// const n2 = fn.call(undefined, false)
// const n3 = fn.apply(undefined, [true])

// 严格内置迭代器返回 - strictFunctionTypes
// function testIteratorReturn() {
//   const arr = [1, 2, 3]
//
//   // 这里会报错，因为没有正确处理迭代器的返回值
//   for (const element of arr) {
//     if (element > 2) break // 在某些情况下可能导致迭代器没有被正确关闭
//   }
// }

// 严格函数类型 - strictFunctionTypes
// function fn(x: string) {
//   console.log('Hello, ' + x.toLowerCase())
// }
// type StringOrNumberFunc = (ns: string | number) => void
// // 报错：
// // Type '(x: string) => void' is not assignable to type 'StringOrNumberFunc'.
// //   Types of parameters 'x' and 'ns' are incompatible.
// //   Type 'string | number' is not assignable to type 'string'.
// //   Type 'number' is not assignable to type 'string'.
// //   Type '(x: string) => void' is not assignable to type 'StringOrNumberFunc'.
// //   Types of parameters 'x' and 'ns' are incompatible.
// //   Type 'string | number' is not assignable to type 'string'.
// //   Type 'number' is not assignable to type 'string'.
// let func: StringOrNumberFunc = fn

// 严格空检查 - strictNullChecks
// declare const loggedInUsername: string
// const users = [
//   { name: 'Oby', age: 12 },
//   { name: 'Hera', age: 32 },
// ]
// const loggedInUser = users.find((u) => u.name === loggedInUsername)
// // 报错：
// // 'loggedInUser' is possibly 'undefined'.
// console.log(loggedInUser.age)

// 严格属性初始化 - strictPropertyInitialization
// class UserAccount {
//   name: string
//   accountType = 'user'
//   // 报错：
//   // Property 'email' has no initializer and is not definitely assigned in the constructor
//   // 属性“email”没有初始化器，且在构造器中也没有明确分配
//   email: string
//   address: string | undefined
//   constructor(name: string) {
//     this.name = name
//     // Note that this.email is not set
//   }
// }

// 在捕获变量中使用未知 - useUnknownInCatchVariables
// try {
//   // err: any -> unknown
// } catch (err) {
//   // 我们必须先验证 err 是否为错误，才能将其当作错误使用
//   if (err instanceof Error) {
//     console.log(err.message)
//   }
// }
