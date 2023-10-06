import { callAPI } from "../support/helper/apiHelper"
import { URLS } from "../support/helper/signupHelper"
describe("Sign Up Page", () => {
    it("Sign UP", () => {
        const body = {
            user: {
                username: "Israa" + Math.random() * 20,
                email: "Israa" + Math.random() * 20 + "@gmail.com",
                password: "123"
            }
        }
      
        const postMakeAPICall = callAPI('POST', URLS.users, body)
    })
})