import { test, expect } from '@playwright/test'


test ('deve poder cadastrar uma nova tarefa ', async ({page, request }) => {

    const  taskName = "Ler um livro de TypeScript"    
    await  request.delete('http://localhost:3333/helper/tasks/' + taskName)

    await  page.goto('http://localhost:8080')

    const InputTaskName = page.locator('input[class*=InputNewTask]')
    await InputTaskName.fill(taskName)  
    await page.click('css=button >> text=Create')
       
    // um outro bom seletor para ser utilziado no lugar de .task-item é pela div
    // div[class*=listItem]

    const target = page.locator('.task-item')
    await expect(target).toHaveText(taskName)
    
})