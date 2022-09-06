import type { NextApiRequest, NextApiResponse } from "next"
import puppeteer from "puppeteer"
import { Messenger } from "types"
const email = process.env.NEXT_PUBLIC_EMAIL || ""
const pass = process.env.NEXT_PUBLIC_PASS || ""
const messenger = process.env.NEXT_PUBLIC_MESSENGER || ""
// const messagenEve = "Good Night 😊"
// const messageMorning = "Good Morning 😊"

const main = async ({ message = "hi 😊" }: Messenger) => {
   const browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-notifications"],
   })
   const page = await browser.newPage()
   await page.goto("https://www.facebook.com/messages/")

   await page.type("#email", email)
   await page.type("#pass", pass)
   await page.click('[data-testid="royal_login_button"]')

   await page.waitForNavigation()

   await page.goto(messenger)

   await page.type("#composerInput", message)
   await page.waitForSelector("button[name=send]:not([disabled])").then((b) => b?.click())
   await browser.close()
}

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
   const { message }: any = req.query || ""
   await main({ message })
   res.status(200).json({ name: "ok", message })
}

export default handler
