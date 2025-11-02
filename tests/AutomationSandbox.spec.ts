import{test, expect, Browser, Page} from'@playwright/test';

(async () =>{
    let browser: Browser;
    let page: Page;

    test.describe('Acciones en el Automation Sandbox', () => {  
        test ('Click en Botón ID dinámico', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step ('Puedo hacer click en el botón con ID dinámico', async () => {
                await  page.getByRole  ('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' }).click();

                //Variante con el elemento en una variable 
                //const dynamicButton = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
                //await dynamicButton.click(force: true);
                //await dynamicButton.dclick(); doble 
                //await dynamicButton.click({ button: 'right'});  
            })
        })
        test ('Puedo seleccionar y desleccionar un checkbox ', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step ('Puedo seleccionar el checkbox Pasta', async () => {
                await  page.getByRole('checkbox', { name: 'Pasta 🍝' }).check(); 
                await  expect ( page.getByRole('checkbox', { name: 'Pasta 🍝' }), 'El checkbox no estaba seleccionado').toBeChecked();

            })

            await test.step('Puedo deseleccionar el chekbox', async () => {
                await  page.getByRole('checkbox', { name: 'Pasta 🍝' }).uncheck ();
                await  expect ( page.getByRole('checkbox', { name: 'Pasta 🍝' })).not.toBeChecked();
                
            })
            
           
        })

        test ('Puedo seleccionar Radio Buttons', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step ('Puedo seleccionar el Radio Button para NO', async () => {
                await  page.getByLabel('No').check();  
            })
           
        })

        test ('Puedo seleccionar Deportes del dropdown para deportes', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step ('Puedo seleccionar el deporte', async () => {
                await  page.getByLabel('Dropdown').selectOption('Fútbol');  
            })
            
           
        })

        test ('Puedo seleccionar un día del dropdown Dias de la semana', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step ('Puedo seleccionar el día', async () => {
                await  page.getByRole('button', { name: 'Día de la semana' }).click;  
                await  page.getByRole('option', { name: 'Martes' }).click;
            })  
        })

        test ('Lleno un campo de texto', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step ('Puedo ingresar texto en el campo Un aburrido texto', async () => {
                await  page.getByRole('textbox', { name: 'Un aburrido texto' }).fill('Texto de prueba con Playwright');  
               // await  page.getByRole('textbox', { name: 'Un aburrido texto' }).press('Enter');
            })
        })

        test ('EJEMPLO Subir archivo', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step ('Puedo subir un archivo', async () => {
                await  page.getByLabel('Upload file').setInputFiles(['paths/to/your/file.txt', 'invoice.pdf']);  
            })
        })

        test ('EJEMPLO Drag and Drop', async ({ page }) => {
            await test.step ('Dado que navego a la página de Automation Sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step ('Hago drap and Drop', async () => {
                await  page.getByTestId('DragFrom').dragTo( page.getByTestId('DropTo'));  
            })
        })


    })

} ) ();