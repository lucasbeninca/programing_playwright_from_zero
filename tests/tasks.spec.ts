import { test, expect } from '@playwright/test'

test ('deve poder cadastrar uma nova tarefa ', async ({page })=>{
    await  page.goto('http://localhost:8080')

    const InputTaskName = page.locator('input[class*=InputNewTask]')
    await InputTaskName.fill('Ler um Livro de TypeScript') 
  
    await page.click('xpath=//button[contains(text(), "Create")]')

    //combiando css e xpath
      //await page.click('css=button >> text=Create')
})